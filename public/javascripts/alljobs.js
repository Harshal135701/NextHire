const buttons = document.querySelectorAll(".bookmark-btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", async function () {
        const jobId = this.dataset.id;
        const textSpan = this.querySelector(".bookmark-text");
        
        try {
            const response = await fetch(`/jobs/bookmark/${jobId}`, {
                method: "POST"
            });

            const data = await response.json();

            if (data.success) {
                if (data.bookmarked) {
                    this.classList.add("saved");
                    if (textSpan) {
                        textSpan.innerText = "Saved";
                    } else {
                        this.innerText = "Saved";
                    }
                } else {
                    this.classList.remove("saved");
                    if (textSpan) {
                        textSpan.innerText = "Save Job";
                    } else {
                        this.innerText = "Save Job";
                    }
                }
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }
    });
});
