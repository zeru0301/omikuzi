const fortuneArray = [
    {filename:"images/kuzi/daikitio.png",
        word:"今年一年いいことがあるかもね！",},
    {filename:"images/kuzi/hebikitio.png",
        word:"白蛇様とのご縁が・・・・！？",},
    {filename:"images/kuzi/kitikitio.png",
        word:"吉が知己を呼んでくるかも",},
    {filename:"images/kuzi/kyoukitio.png",
        word:"狂人の如く全ての出来事を今年一年は達成できるかも？",},
    {filename:"images/kuzi/sypukitio.png",
        word:"今年はおとなしくしておくべきかも？",},
    {filename:"images/kuzi/tyuukitio.png",
        word:"良くも悪くもないね！",},
    {filename:"images/kuzi/zyoukitio.png",
        word:"パワーアップチャンス！次のくじ効果を\r\n倍に出来る！",},
];

const omikujiBox = document.querySelector("#omikuzi");

const messageBox = document.querySelector("#message");

const btnBox = document.querySelector("#btn");

btnBox.addEventListener("click",() => {

    const num= Math.floor(Math.random() * fortuneArray.length);

    omikujiBox.src = fortuneArray[num].filename;

    messageBox.textContent = fortuneArray[num].word;
    
});