(async () => {
  const token = prompt('TOKENを入力');
  if (!token) return console.log('TOKENを入力してください');

  const house = prompt('HypeSquadのidを入力(1=Bravery, 2=Brilliance, 3=Balance)');
  if (!house || !['1','2','3'].includes(house)) {
    return console.log('IDが無効です');
  }

  try {
    const res = await fetch('https://discord.com/api/v9/hypesquad/online', {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ house_id: Number(house) })
    });

    if (res.ok) {
      console.log(`成功しました(house_id=${house})`);
    } else {
      console.log(`失敗しました(status=${res.status})`);
    }
  } catch (err) {
    console.log('エラーが発生しました' + err.message);
  }
})();
