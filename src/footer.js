function createFooter() {
    const footer = document.createElement("footer");
    
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} reyesvictor1`;
    
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/reyesvictor1";
    githubLink.target = "blank";
    
    const githubIcon = document.createElement("img");
    githubIcon.classList.add("github-icon");
    githubIcon.src = "images/github.png";
    
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    
    return footer;
}

export default createFooter;