export default class Api {
    constructor(data) {
        this.url = data.url;
        this.headers = data.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            headers: this.headers,
        })
            .then(res => this._checkResponse(res))
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => this._checkResponse(res))
    }
    cardLike(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,
        })
            .then(res => this._checkResponse(res))
    }
    cardLikeRemove(cardId) {
        return fetch(`${this.url}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,
        })
            .then(res => this._checkResponse(res))
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
            .then(res => this._checkResponse(res))
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
            .then(res => this._checkResponse(res))
    }
    setProfileAvatar(item) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: item.avatar,
            })
        })
            .then(res => this._checkResponse(res))
    }
    profileDataInstall() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers,
        })
            .then(res => this._checkResponse(res))
    }

}