const modal = document.getElementById("modal");
const content = document.getElementById("content");
const changeForm = document.getElementById("changeForm");
const modalContainer = document.getElementById("modalContainer");
const notificationContainer = document.getElementById("notificationContainer");

let sort = "asc";

document.addEventListener("click", async (e) => {
    const id = e.target.dataset.id;

    if (id === "sort") {
        sortData();
    } else if (id === "delete") {
        const userID = e.target.id;
        await deleteAccount(userID);
    } else if (id === "add") {
        modalContainer.classList.add("active");
    }
});

changeForm?.addEventListener("submit", changeUserData);
modal?.addEventListener("submit", addUser);
modalContainer?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        modalContainer.classList.remove("active");
    }
});

async function addUser(e) {
    try {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        showNotification("User is added", "success");
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    } catch (error) {
        showNotification(error.message, "error");
    }
}

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
        showNotification(error.message, "error");
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
        const isDelete = confirm("Do you want to delete?");
        if (!isDelete) return;
        const response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("There are was a problem");
        }
        showNotification("User is deleted!", "success");
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    } catch (error) {
        showNotification(error.message, "error");
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

        showNotification("User is updated!", "success");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    } catch (error) {
        alert(error.message);
    }
}

function showNotification(message, type) {
    const notification = document.createElement("div");

    notification.classList.add("notification", "show", type);
    notification.textContent = message;
    notificationContainer.append(notification);

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
    setTimeout(() => {
        notification.remove();
    }, 3200);
}
