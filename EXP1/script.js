
let isFollowing = false;

function follow() {

    let btn = document.getElementById("followBtn");
    let count = document.getElementById("followers");

    if (isFollowing == false) {
        btn.innerText = "Following";
        btn.classList.add("following");
        count.innerText = "121 followers";
        isFollowing = true;
    }
    else {
        btn.innerText = "Follow";
        btn.classList.remove("following");
        count.innerText = "120 followers";
        isFollowing = false;
    }
}
