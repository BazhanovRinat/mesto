export default class Api {
    constructor(data) {
        this.url = data.url;
        this.headers = data.headers;
    }
    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            headers: this.headers,
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    cardLike(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    cardLikeRemove(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    postCard(item) {
        return fetch(`${this.url}/cards/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                link: item.link
            })
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    setProfileInfo(item) {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about
            })
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    setProfileAvatar(item) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: item.avatar,
            })
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
    profileDataInstall() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers,
        })
            .then(res => {
                //console.log(res)
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

}