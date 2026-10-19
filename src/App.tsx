import React, { useEffect } from 'react';
import Markup from './Markup';
import { attachExperience } from './engine';
import header from './header.html?raw';
import dialog from './dialog.html?raw';
import footer from './footer.html?raw';
import gate from './scenes/gate.html?raw';
import flower from './scenes/flower.html?raw';
import gift from './scenes/gift.html?raw';
import beat from './scenes/beat.html?raw';
import catchScene from './scenes/catch.html?raw';
import wish from './scenes/wish.html?raw';
import garden from './scenes/garden.html?raw';
import envelope from './scenes/envelope.html?raw';
import letter from './scenes/letter.html?raw';
import './styles.css';

// React renders the V6 layout and SVGs unmodified, preserving the mobile/desktop design.
// The interactions currently live in engine.js to retain the exact V6 flow and export.
const scenes = [
  gate,
  flower,
  gift,
  beat,
  catchScene,
  wish,
  garden,
  envelope,
  letter
];

export default function App() {
  useEffect(() => { attachExperience(); }, []);
  return (
    <div className="app" id="app" data-step="gate" data-build="2026-10-19-v7-react-web">
      <Markup html={header} />
      <main className="frame" id="main">
        {scenes.map((html, index) => <Markup key={index} html={html} />)}
      </main>
      <Markup html={dialog} />
      <Markup html={footer} />
    </div>
  );
}
