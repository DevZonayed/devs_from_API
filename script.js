let ground = document.querySelector('#ground');

fetch("https://my-json-server.typicode.com/DevZonayed/developer_API/devs").then(data => data.json().then(element => {
    let print = '';
    element.map(s_data => {
        print += `
        <div class="col-lg-3 my-2">
        <div class="card">
            <div class="card-header">
                <h3>${s_data.name}</h3>
            </div>
            <button onclick="openmodal(${s_data.id})" data-bs-toggle="modal" data-bs-target="#single-devs-modal"  >
                <img class="profileImage" src="${s_data.image}" alt="">
            </button>
            <div class="card-footer">
                <span class="slikk"><b>Skill :</b> ${s_data.skill}</span> <br>
                <span class="slikk"><b>Age :</b> ${s_data.age}</span>
            </div>
        </div>
    </div>
        `
    })
    ground.innerHTML = print;
}))


function openmodal(get){
    document.querySelector('#modalGround').innerHTML = '';
    fetch("https://my-json-server.typicode.com/DevZonayed/developer_API/devs/"+get).then(data => data.json().then(single => {
        document.querySelector('#modalGround').innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">
                <h3>${single.name}</h3>
            </div>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-lg-6">
                    <img class="modal_self_image" src="${single.image}" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="modal_skill">
                        <b>Skill :</b> ${single.skill}
                    </div>
                    <div class="modal_age">
                        <b>Age :</b> ${single.age}
                    </div>
                    <div class="modal_location">
                        <b>Location :</b> ${single.location}
                    </div>
                    <div class="modal_about">
                        <b>About :</b> <br> <p>${single.about}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }))
}