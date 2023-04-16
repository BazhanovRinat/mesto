export default class UserInfo {
    constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
        this.profileName = document.querySelector(profileNameSelector);
        this.profileAbout = document.querySelector(profileAboutSelector);
        this.profileAvatar = document.querySelector(profileAvatarSelector);
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

    setAvatarProfile(avatar) {
        this.profileAvatar.src = avatar;
    }
}