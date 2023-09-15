const app = new PIXI.Application({ background: 0x00DD00, height: 600, width:1200 });

document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from('localhost/imgs/goal1.png');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.eventMode = 'static';

// Shows hand cursor
sprite.cursor = 'pointer';

// Pointers normalize touch and mouse (good for mobile and desktop)
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);

function onClick()
{
    sprite.scale.x *= 1.25;
    sprite.scale.y *= 1.25;
}
