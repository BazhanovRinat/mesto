export default class UserInfo {
    constructor({ profileName, profileAbout }) {
        this.profileName = document.querySelector(profileName);
        this.profileAbout = document.querySelector(profileAbout);
    }
    getUserInfo() {
        const userInfo = {
            name: this.profileName.textContent,
            about: this.profileAbout.textContent,
        }
        return userInfo
    }
    setUserInfo(name, about) {
        this.profileName.textContent = name;
        this.profileAbout.textContent = about;
    }
}