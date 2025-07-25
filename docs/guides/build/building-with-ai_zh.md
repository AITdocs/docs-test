# 使用人工智能进行构建

人工智能是一种新型的编程基础组件。大型语言模型（LLMs）让我们能够编写出以**常识性**方式处理**非结构化**信息的软件。

设想一个任务：编写一个程序，从以下段落中提取所有人名：

> 现在，其他的希腊王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。就像赫拉美丽的主人（宙斯）以闪电预示着倾盆大雨、冰雹或雪花覆盖大地的严寒天气，又或是预示他将张开饥饿战争的巨口一样，阿伽门农也发出一声又一声沉重的叹息，他的内心充满震颤。当他望向特洛伊平原时，看到前方燃烧着无数的警卫篝火，感到惊讶不已……——《伊利亚特》第十卷

对于人类来说提取名字很简单，但如果只使用传统编程方法就非常困难。编写一个能从任意段落中提取名字的通用程序则更加困难。

然而，使用LLM，这项任务几乎变得微不足道。我们只需将以下内容输入LLM：

> 列出以下段落中出现的所有人名，用逗号分隔：现在，其他的希腊王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。就像赫拉美丽的主人（宙斯）以闪电预示着倾盆大雨、冰雹或雪花覆盖大地的严寒天气，又或是预示他将张开饥饿战争的巨口一样，阿伽门农也发出一声又一声沉重的叹息，他的内心充满震颤。当他望向特洛伊平原时，看到前方燃烧着无数的警卫篝火，感到惊讶不已……——《伊利亚特》第十卷

输出结果将正确为：

> 阿伽门农, 阿特柔斯, 赫拉

将LLM集成到软件应用程序中就像调用API一样简单。尽管不同LLM的具体API可能有所不同，但大多数已经形成了一些通用的模式：

* 对 API 的调用通常包含一些参数，例如 `model` 标识符和一组 `messages`。
* 每个 `message` 都具有 `role` 和 `content`。
* `system` 角色可以理解为对模型的*指令*。
* `user` 角色可以理解为需要处理的*数据*。

例如，我们可以使用 AI 编写一个通用函数，从输入文本中提取姓名。

{% CustomTabs %}

{% Tab label="OpenAI" %}

{% TabbedCodeBlock %}

{% Tab label="python" %}
```python
import json
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_names(text: str) -> list[str]:
    system_prompt = "You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting."

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": text}
        ]
    )

    response = response.choices[0].message["content"]
    return json.loads(response)
```
{% /Tab %}

{% Tab label="typescript" %}
```typescript
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function extractNames(text: string): Promise<string[]> {
    const systemPrompt =
        'You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting.';

    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: text },
        ]
    });

    const responseText = chatCompletion.choices[0].message?.content ?? '[]';
    return JSON.parse(responseText);
}
```
{% /Tab %}

{% /TabbedCodeBlock %}

{% /Tab %}


{% Tab label="Anthropic" %}

{% TabbedCodeBlock %}

{% Tab label="python" %}
```python
import json
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

def extract_names(text: str) -> list[str]:
    system_prompt = "你是专门提取名字的助手。用户会提供一段文本，你必须返回一个包含所有提到的名字的JSON数组。不要包含任何解释或格式说明。"

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1000,
        system=system_prompt,
        messages=[
            {"role": "user", "content": text}
        ]
    )

    response_text = response.content[0].text
    return json.loads(response_text)
```
{% /Tab %}

{% Tab label="typescript" %}
```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function extractNames(text: string): Promise<string[]> {
    const systemPrompt =
        '你是专门提取名字的助手。用户会提供一段文本，你必须返回一个包含所有提到的名字的JSON数组。不要包含任何解释或格式说明。';

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
            { role: 'user', content: text },
        ]
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '[]';
    return JSON.parse(responseText);
}
```
{% /Tab %}

{% /TabbedCodeBlock %}

{% /Tab %}

{% /CustomTabs %}