// Data array for runners
const runners = [
    {
        name: "GinoMachino",
        specialty: "Any% No-Hit SpeedRuns",
        image: "public/GinoMachino.png"
    },
    {
        name: "dinossindgeil",
        specialty: "SL1 All Bosses No-Hit",
        image: "public/dinossindgeil.jpg"
    },
    {
        name: "The Happy Hob",
        specialty: "All Bosses + DLC No-Hit",
        image: "public/TheHappyHob.jpg"
    }
];

// Function to create runner profile elements
function createRunnerProfiles() {
    const container = document.getElementById("runners-container");

    runners.forEach(runner => {
        // Create runner profile container
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("runner-profile");

        // Create and append image
        const img = document.createElement("img");
        img.src = runner.image;
        img.alt = `Image of ${runner.name}`;
        img.classList.add("runner-image");
        profileDiv.appendChild(img);

        // Create and append runner info
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("runner-info");

        const namePara = document.createElement("p");
        namePara.classList.add("runner-name");
        namePara.textContent = runner.name;
        infoDiv.appendChild(namePara);

        const specialtyPara = document.createElement("p");
        specialtyPara.classList.add("runner-specialty");
        specialtyPara.textContent = `Specialty: ${runner.specialty}`;
        infoDiv.appendChild(specialtyPara);

        // Append infoDiv to profileDiv
        profileDiv.appendChild(infoDiv);

        // Append profileDiv to container
        container.appendChild(profileDiv);
    });
}

// Call the function to create runner profiles
createRunnerProfiles();
