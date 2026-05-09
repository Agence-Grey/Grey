import json
with open('/root/agence-grey-project/hn_recent.json') as f:
    data = json.load(f)
relevant = []
# Broad AI/agent/web-dev filter
keywords = ['ai', 'agent', 'gpt', 'claude', 'gemini', 'opus', 'vercel', 'next.js', 'react', 'openai', 'anthropic', 'google', 'llm', 'model', 'deploy', 'design', 'web', 'css', 'frontend', 'framework', 'copilot', 'cursor', 'dev', 'code', 'developer', 'api', 'cloudflare', 'browser', 'javascript', 'typescript', 'tailwind', 'shadcn', 'ui', 'ux', 'computer', 'pricing', 'open source', 'release']
for h in data.get('hits',[]):
    t = h['title'].lower()
    if any(k in t for k in keywords):
        relevant.append((h.get('points',0), h['title'], h.get('url',''), h.get('objectID','')))
relevant.sort(key=lambda x: -x[0])
for pts, title, url, oid in relevant[:25]:
    print(f'{pts:>4} | {title}')
    print(f'      {url}')
    print(f'      https://news.ycombinator.com/item?id={oid}')
    print()
