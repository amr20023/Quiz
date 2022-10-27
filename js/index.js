import {settings} from './Settings.js'
let se = new settings();

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });