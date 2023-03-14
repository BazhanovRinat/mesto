export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector }) {
        this.profileName = document.querySelector(profileNameSelector);
        this.profileAbout = document.querySelector(profileAboutSelector);
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