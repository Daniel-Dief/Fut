const app = new PIXI.Application({ background: 0x00DD00, height: 600, width:1200 });
document.body.appendChild(app.view);


/* linhas e marcações */
const linhaLateral = new PIXI.Graphics();
const linhaMeio = new PIXI.Graphics();
const linhaCirculo = new PIXI.Graphics();
const grandeArea1 = new PIXI.Graphics();
const grandeArea2 = new PIXI.Graphics();
const arco1 = new PIXI.Graphics();
const arco2 = new PIXI.Graphics();

/* lateral */
linhaLateral.lineStyle(2, 0x000000);
linhaLateral.moveTo(70, 30);
linhaLateral.lineTo(1130, 30);
linhaLateral.lineTo(1130, 570);
linhaLateral.lineTo(70, 570);
linhaLateral.lineTo(70, 30);

/* meio de campo */
linhaMeio.lineStyle(2, 0x000000);
linhaMeio.moveTo(600, 30);
linhaMeio.lineTo(600, 570);

/* circulo do mei de campo */ 
linhaCirculo.lineStyle(2, 0x000000);
linhaCirculo.arc(app.screen.width / 2, app.screen.height / 2, 90, 0, 360);

/* grande e pequena area */
grandeArea1.lineStyle(2, 0x000000);
grandeArea1.moveTo(70, app.screen.height * 0.2);
grandeArea1.lineTo(250, app.screen.height * 0.2);
grandeArea1.lineTo(250, app.screen.height * 0.8);
grandeArea1.lineTo(70, app.screen.height * 0.8);
grandeArea1.lineTo(70, app.screen.height * 0.65);
grandeArea1.lineTo(130, app.screen.height * 0.65);
grandeArea1.lineTo(130, app.screen.height * 0.35);
grandeArea1.lineTo(70, app.screen.height * 0.35);

grandeArea2.lineStyle(2, 0x000000);
grandeArea2.moveTo(1130, app.screen.height * 0.2);
grandeArea2.lineTo(950, app.screen.height * 0.2);
grandeArea2.lineTo(950, app.screen.height * 0.8);
grandeArea2.lineTo(1130, app.screen.height * 0.8);
grandeArea2.lineTo(1130, app.screen.height * 0.65);
grandeArea2.lineTo(1070, app.screen.height * 0.65);
grandeArea2.lineTo(1070, app.screen.height * 0.35);
grandeArea2.lineTo(1130, app.screen.height * 0.35);

/* arcos das areas */
arco1.lineStyle(2, 0x000000);
arco1.arc(180, app.screen.height / 2, 100, 5.5, 7.07);

arco2.lineStyle(2, 0x000000);
arco2.arc(1020, app.screen.height / 2, 100, 8.65, 10.22);

/* adicinando as linhas */
app.stage.addChild(linhaLateral);
app.stage.addChild(linhaMeio);
app.stage.addChild(linhaCirculo);
app.stage.addChild(grandeArea1);
app.stage.addChild(grandeArea2);
app.stage.addChild(arco1);
app.stage.addChild(arco2);