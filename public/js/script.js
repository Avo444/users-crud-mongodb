const content = document.getElementById("content");
const changeForm = document.getElementById("changeForm");

let sort = "asc";

document.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;

    if (id === "sort") {
        sortData();
    } else if (id === "delete") {
        const userID = e.target.id;
        await deleteAccount(userID);
    }
});

changeForm.addEventListener("submit", changeUserData);

async function sortData() {
    try {
        sort = sort === "asc" ? "desc" : "asc";
        const response = await fetch(
            `http://localhost:3000/api/users?sort=${sort}`,
        );
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error);
        }
        renderData(data);
    } catch (error) {
        alert(error.message);
    }
}

function renderData(data) {
    if (!data || !data.length) {
        content.textContent = "Users is not found!";
    }
    content.innerHTML = "";
    data.forEach((user) => {
        content.innerHTML += `
            <li class="item">
                <p class="id">${user._id}</p>
                <p class="title">${user.firstName} ${user.lastName}</p>
                <p class="gender">gender: ${user.gender}</p>
                <p class="gender">Age: ${user.age}</p>
                <a href="/view/${user._id}" class="btn">View</a>
            </li>
        `;
    });
}

async function deleteAccount(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("There are was a problem");
        }

        window.location.href = "/";
    } catch (error) {
        alert(error.message);
    }
}

async function changeUserData(e) {
    try {
        e.preventDefault();
        const id = e.target.dataset.id;
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        window.location.reload();
    } catch (error) {
        alert(error.message);
    }
}
