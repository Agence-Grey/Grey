import json
with open('/root/agence-grey-project/hn_more.json') as f:
    data = json.load(f)

# Filter for relevant tech/AI/web/agent topics
relevant = []
for h in data.get('hits',[]):
    t = h['title'].lower()
    url = h.get('url','')
    pts = h.get('points',0)
    
    # Keywords for relevance to L'Agence Grey
    relevant_keywords = [
        'ai', 'agent', 'gpt', 'claude', 'opus', 'gemini', 'llama', 'mistral',
        'vercel', 'next.js', 'react', 'openai', 'anthropic', 'google ai',
        'llm', 'model release', 'deploy', 'design', 'web', 'css', 'frontend',
        'framework', 'copilot', 'cursor', 'developer', 'api', 'cloudflare',
        'browser', 'javascript', 'typescript', 'tailwind', 'shadcn', 'ui',
        'ux', 'computer use', 'pricing', 'open source', 'release', 'launch',
        'tool', 'vector', 'rag', 'search', 'coding', 'code', 'programming',
        'studio', 'ide', 'editor', 'agentic', 'workflow', 'automation',
        'reasoning', 'token', 'context', 'speed', 'latency', 'cheap',
    ]
    
    score = sum(1 for kw in relevant_keywords if kw in t)
    if score > 0:
        relevant.append((score, pts, h['title'], url, h.get('objectID','')))

relevant.sort(key=lambda x: (-x[0], -x[1]))
print(f"Found {len(relevant)} relevant items\n")
for score, pts, title, url, oid in relevant[:30]:
    print(f'[{score}] {pts:>4}pts | {title}')
    print(f'      {url}')
    print(f'      https://news.ycombinator.com/item?id={oid}')
    print()
