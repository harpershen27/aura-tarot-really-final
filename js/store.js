/* ============================================
   LocalStorage state for the tarot reading flow
   Keys:
     - aura.question  : string
     - aura.draws     : [{ id, reversed }]  // length 3
   ============================================ */

const STORAGE = {
  getQuestion() { return localStorage.getItem('aura.question') || ''; },
  setQuestion(q) { localStorage.setItem('aura.question', q || ''); },
  getDraws() {
    try { return JSON.parse(localStorage.getItem('aura.draws') || '[]'); }
    catch { return []; }
  },
  setDraws(arr) { localStorage.setItem('aura.draws', JSON.stringify(arr || [])); },
  clear() {
    localStorage.removeItem('aura.question');
    localStorage.removeItem('aura.draws');
  }
};

window.STORAGE = STORAGE;
