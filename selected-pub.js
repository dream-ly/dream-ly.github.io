function showResearchTab(tab) {
    console.log("showResearchTab called with tab:", tab); // Debugging line
    document.getElementById("research-selected").style.display = tab === 'selected' ? 'block' : 'none';
    document.getElementById("research-all").style.display = tab === 'all' ? 'block' : 'none';
}
