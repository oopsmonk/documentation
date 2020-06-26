# Style guide

This document is a reference for anyone who is writing content for the documentation portal.

If you are creating or editing an article, please follow our style guide to help us do the following:

- Create and maintain a consistent tone of voice 
- Offer documentation in a standard format
- Make our documentation straightforward to read for non-native English readers
- Make sure that our documentation educates our readers

If you have a question about writing that we don't cover in this guide, use the [Google style guide](https://developers.google.com/style/).

## Markdown

We use an enhanced version of markdown for our documentation. Please refer to these [tips](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you haven't used markdown before.

### Tabbed controls

Tabbed controls are useful for creating content for different users or use cases such as multiple code samples.

To create tabbed code samples, use the following syntax:

```markdown
--------------------
### Tab Page 1
This is the content in tab page 1.
---
### Tab Page 2
This is the content in tab page 2.
--------------------
```

:::info:
The h3 heading is the tab label.
:::

![Tabbed Control](/contributing/0.1/documentation/images/tabbed-control.png)

### Cards

Cards are useful for project landing pages, where you need to list more than one type or category.

To create a card, use the following syntax:

```markdown
-------------------------
Image
## Title with link to file
Data silos make it difficult to buy and sell data among different data points. To overcome this challenge, the Data Marketplace uses IOTA MAM channels to open up the data silos and allow users to make micropayments of IOTA tokens to the data owners in exchange for data.
-------------------------
```

![Cards](/contributing/0.1/documentation/images/card.png)

### Colored headings

Colored headings are useful for showing a clearer distinction between to different headings.

To create a colored heading, use the following syntax:

```markdown
### **OFFICIAL SUPPORT** ###

### __COMMUNITY SUPPORT__ ###
```

![Heading Label](/contributing/0.1/documentation/images/heading-label-primary.png)

![Heading Label](/contributing/0.1/documentation/images/heading-label-secondary.png)

### Colored bullets

Colored bullets are useful for listing content under colored headings.

To create a colored bullet, use the following syntax:

```markdown
---------------
#### **JavaScript Library** ####
Link to file

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
---
#### __Go Library__ ####
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
---
#### Python Library ####
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
---------------
```

![Project Topics](/contributing/0.1/documentation/images/project-topics.png)

### Emoji

Using an emoji in your content can help to engage the reader.

:::warning:
Certain emoji have different meanings in different cultures. For example, in Brazil the OK symbol :ok_hand: is considered rude, and in the Middle East, so is the thumbs-up symbol :+1:.
:::

To create an emoji, use the following syntax:

```markdown
:smile:
:laughing:
```

![Emojis](/contribution/0.1/documentation/images/emojis.png)

For a list of available emoji, see this JSON file: [https://github.com/muan/emojilib/blob/master/emojis.json](https://github.com/muan/emojilib/blob/master/emojis.json)

### Google maps

A Google map can be embedded in your content by surrounding it with `¬¬¬` fencing. You can then specify the type as `[map]` and provide the JSON configuration for the object as follows:

```markdown
¬¬¬
[map]
{
    "zoom":14,
    "center": {
        "lat": 52.5294498,
        "lng": 13.412903
    },
    "markers": [
        {
            "name": "IOTA Foundation",
            "lat": 52.5294498,
            "lng": 13.412903
        }
    ]
}
¬¬¬
```

![Google Maps for IOTA](/contribution/0.1/documentation/images/maps.png)

### Data feeds

A feed can be embedded in your content by surrounding it with `¬¬¬` fencing. You can then specify the type as `[feed]` and provide the JSON configuration for the object as follows:

```markdown
¬¬¬
[feed]
{
    "displayType": "event",
    "context": "training"
}
¬¬¬
```

The `displayType` field specifies how the content will be rendered on the page and the `context` field is used to determine where the data is retrieved from using the documentation api e.g. `https://docs-api.iota.org/feed/training`. The feeds list supports paging and will show it when necessary. The table of contents for the page is dynamically generated from any h2 headers in the rendered items.

![Event Feed](/contribution/0.1/documentation/images/feed.png)

### Message boxes

Message boxes are useful for bringing attention to certain information.

To create a message box, use the following syntax:

```markdown
:::success:A Success
This is the content,
on multiple lines :tada:
:::

:::warning:Just A Warning Title:::

:::info:
Some multiline content only.
This is line 2.
:::

:::danger:Danger Danger
Will Robinson :bomb:
:::
```

![Message Boxes](/contribution/0.1/documentation/images/message-boxes.png)

:::info:
Use an `info` box to bring attention to informations. For example, you may want to give the reader a hint. Without an `info` box, a user may lose precious time and become frustrated while trying to understand why something is not working.
:::

:::success:
Use a `success` box at the end of a task to let the reader know that they've completed it.
:::

:::warning:
Use a `warning` box more serious information than an `info` box to let the reader know important information.
:::

:::danger:
Use a `danger` box to warn the reader that an action may lead to lost funds or system failure.
:::

## Writing tools

We recommend using a code editor that supports markdown files, for example [Visual Studio Code](https://code.visualstudio.com/) with the [markdown Lint extension](https://github.com/DavidAnson/vscode-markdownlint).

## General rules

These general rules make information easier to understand and translate.

| **Rule** | **Example** |
| :----| :-------|
| Never use a long word where a short one will do| '~~Utilize~~ **Use** short words'|
|If it's possible to remove a word, always remove it | 'This method is ~~exactly~~ the same as the previous one'
| Always use the active voice where possible | '~~The active voice must always be used where possible~~.' 'You must always use the active voice where possible'
| Never use a foreign phrase, a scientific word or a jargon word if you can think of an everyday English equivalent | ~~E.g~~ For example |
| Place the one-word modifiers 'only' and 'not' immediately in front of whatever they're modifying| 'For security reasons, IOTA addresses should ~~only~~ be withdrawn from **only** once'|
|Don't use (s) to form plural nouns| 'Select the ~~item(s)~~ **items** that you want to remove'|

Research shows that the above holds true even for very technical audience. See the [GOV.UK style guide](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) for examples.

## UK English or US English?

We always write in US English.

## Punctuation

- Always use a capital letter after colons
- Always use an oxford comma (comma before and in a list, for example 'The JavaScript, Python, and C client libraries')
- Don't use periods at the end of single sentence lists. Use periods only when list items consists of more than one sentence

## Article titles

|Use sentence case for titles. Do not use title case.


## Guides

A guide is an article that helps experienced users achieve a task or a set of related tasks.

Each guide should explain not only **how** to perform the scenario, but also **why** a user would want to perform the scenario. What does it achieve? Why is it needed?

A brief introduction in the form of a **what** is the scenario about. A **when** section to put the scenario in context with other scenarios.

## Tutorials

A tutorial is an article for newcomers to a product that provides step-by-step instructions on how to complete a specific task.

## Code formatting

When adding code examples and snippets into an article, make sure you format it accordingly and add language identifiers for correct code highlighting. See [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for more information.

### Bash

Bash code blocks shall not contain the path.

Instead of:

```bash
user@hostname:~/tmp$ mkdir whatever
```

Use a standalone statement:

```bash
mkdir whatever
```
