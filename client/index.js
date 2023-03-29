const content = await (
  await fetch('http://localhost:15000', {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
).text();

document.getElementByClassName('content').innerHtml = content ?? 'kek';
