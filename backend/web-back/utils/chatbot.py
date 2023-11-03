# =============================================================
# ライブラリ＆API認証情報
# =============================================================

import openai
import os

# openai.organization = "<Organization IDをここに入力>"
openai.api_key      = os.getenv("API_KEY")

# =============================================================
# チャットボット関数
# =============================================================

def Ask_ChatGPT(message,title,role):

    messages = [{
        "role":"system", "content":"あなたはディベートのスペシャリストです。これから私とあなたでディベートを行います。あなたはテーマに対して肯定派、否定派のいずれかとして私と討議します。その中であなたは私への説得、発言のタイミングや戦略、私の意見への反論などを行い、あなたの意見がより納得できる内容であることを読み手に伝わるように発言してください。 初めに「テーマ」とあなたと私、いずれが「肯定派」「否定派」かの指定を行い、その後、私とあなたでこのテーマについて繰り返し議論を行います。それでは始めます。テーマは「" + title + "」、あなたは「" + role + "」です。100文字程度で返答してください。"
    }]
    message = message[:-2] + [{"role":message[-1]["role"], "content":message[-1]["content"]+" 100文字以内で意見や反論をしてください。"}] 
    messages = messages + message 
    # print(messages)
    
    # 応答設定
    response = None
    try:
        response = openai.ChatCompletion.create(
                    model    = "gpt-3.5-turbo",     # モデルを選択
                    messages = messages,
                    # max_tokens  = 2048,             # 生成する文章の最大単語数
                    n           = 1,                # いくつの返答を生成するか
                    stop        = None,             # 指定した単語が出現した場合、文章生成を打ち切る
                    temperature = 0.5,              # 出力する単語のランダム性（0から2の範囲） 0であれば毎回返答内容固定
        )
    
    except openai.error.APIError as e:
        #Handle API error here, e.g. retry or log
        print(f"OpenAI API returned an API Error: {e}")
        pass
    except openai.error.APIConnectionError as e:
        #Handle connection error here
        print(f"Failed to connect to OpenAI API: {e}")
        pass
    except openai.error.RateLimitError as e:
        #Handle rate limit error (we recommend using exponential backoff)
        print(f"OpenAI API request exceeded rate limit: {e}")
        pass
    except openai.error.Timeout as e:
        print(f"error Timeout: {e}")
        pass
    except openai.error.InvalidRequestError as e:
        print(f"error InvalidRequestError: {e}")
        pass
    except openai.error.ServiceUnavailableError as e:
        print(f"error ServiceUnavailableError: {e}")
        pass
    except openai.error.AuthenticationError as e:
        print(f"error AuthenticationError: {e}")
        pass
    
    # 応答
    # print(response)
    # response = completion.choices[0].message.content
    response = response["choices"][0]["message"]["content"]
    print("ok")
    
    # 応答内容出力
    return response


def Judge_debate(message):

    messages = [{
        "role":"system", "content":"あなたはディベートの判定をするスペシャリストです。userとassistantどちらの内容が論理的で相手の会話を論破していたか判定してください。また、どの論点が優れていたかコメントしてください。判定の結果は、「'勝者:[ここに記述]'、'コメント:[ここに記述]'」の[]の中に[]も含めて記述して回答してください。100文字程度で返答してください"
    }]

    content = ""
    for mes in message:
        content = content + mes["role"] + ": " + mes["content"]

    messages = messages + [{"role":"user", "content":content}]

    response = None
    # 応答設定
    try:
        response = openai.ChatCompletion.create(
                    model    = "gpt-3.5-turbo",     # モデルを選択
                    messages = messages,
                    # max_tokens  = 2048,             # 生成する文章の最大単語数
                    n           = 1,                # いくつの返答を生成するか
                    stop        = None,             # 指定した単語が出現した場合、文章生成を打ち切る
                    temperature = 0.5,              # 出力する単語のランダム性（0から2の範囲） 0であれば毎回返答内容固定
        )

    except openai.error.APIError as e:
        #Handle API error here, e.g. retry or log
        print(f"OpenAI API returned an API Error: {e}")
        pass
    except openai.error.APIConnectionError as e:
        #Handle connection error here
        print(f"Failed to connect to OpenAI API: {e}")
        pass
    except openai.error.RateLimitError as e:
        #Handle rate limit error (we recommend using exponential backoff)
        print(f"OpenAI API request exceeded rate limit: {e}")
        pass
    except openai.error.Timeout as e:
        print("error openai: {e}")
        pass
    except openai.error.InvalidRequestError as e:
        print("error openai: {e}")
        pass
    except openai.error.ServiceUnavailableError as e:
        print("error openai: {e}")
        pass
    except openai.error.AuthenticationError as e:
        print("error openai: {e}")
        pass
    
    response = response["choices"][0]["message"]["content"]
    print(response)
    # response = message + [{"role":"assistant", "content":response}]
    
    # 応答内容出力
    return response

def DefaetedJudge(message):
    messages = [{
        "role":"system", "content":"あなたはディベートの判定をするスペシャリストです。userがassistantの意見を論破しているまたは、論理的に反論できているなら「True」、そうでなければ「False」と判定してください。判定の結果は「判定結果:[ここに記述]」の[]の中に記述して回答してください"
    }]

    content = ""
    print(len(message), "messageの長さ")
    if(len(message)<=1): content + message[-1]["role"] + ": " + message[-1]["content"]      #直前のAIとユーザーの会話を取り出す
    else: 
        content = content + message[-2]["role"] + ": " +message[-2]["content"]              #直前のAIとユーザーの会話を取り出す
        content = content + message[-1]["role"] + ": " + message[-1]["content"]
    messages = messages + [{"role":"user", "content":content}]
    print(messages)

    response = completion = openai.ChatCompletion.create(
                 model    = "gpt-3.5-turbo",     # モデルを選択
                 messages = messages,
                #  max_tokens  = 2048,             # 生成する文章の最大単語数
                 n           = 1,                # いくつの返答を生成するか
                 stop        = None,             # 指定した単語が出現した場合、文章生成を打ち切る
                 temperature = 0.5,              # 出力する単語のランダム性（0から2の範囲） 0であれば毎回返答内容固定
                )
    
    response = response["choices"][0]["message"]["content"]
    print(response)
    
    return response






# =============================================================
# チャットボット実行
# =============================================================

# 質問内容
# message = [{"role":"user", "content":"きのこの里より、たけのこの里のほうが美味しいです。",},
#            {"role":"assistant", "content":"私は「きのこの里のほうが美味しい」と主張します。きのこの里は、口どけの良いチョコレートと、ほんのりとしたきのこの風味が絶妙にマッチしています。また、その独特な食感も魅力の一つです。たけのこの里も美味しいですが、きのこの里の方がより多くの人々に愛されており、その証拠に売り上げも高いです。",},
#            {"role":"user", "content":"きのこの里より、たけのこの里のほうが売上は高いですよ",}
#            ]

# # ChatGPT起動
# res = Ask_ChatGPT(message)

# # 出力
# print(res)

