document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.answer');
        const isVisible = answer.style.display === 'block';
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

const tips = [
    "Tartsd az arany kulcsokat a ritka szobákhoz.",
    "Használj bombákat falak felfedezésére.",
    "Fókuszálj a statisztikáid növelésére a boss harc előtt.",
    "Kerüld a veszélyes tárgyak kombinálását, például a My Reflection-et és a Brimstone-t.",
    "Ments el bombákat a titkos szobákhoz és boss harcokhoz."
];

document.getElementById("randomTipButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("randomTip").textContent = tips[randomIndex];
});