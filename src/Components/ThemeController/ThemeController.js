export const ThemeController = {
    defaultTheme: 'lightMode',
    getTheme: function() {
        let currentTheme = localStorage.getItem('theme');
        if (!currentTheme) currentTheme = this.defaultTheme;
        localStorage.setItem('theme', currentTheme);
        return currentTheme;
    },
    toggleTheme: function() {
        let currentTheme = this.getTheme();
        if (currentTheme === 'lightMode')
            currentTheme = 'darkMode';
        else
            currentTheme = 'lightMode';
        localStorage.setItem('theme', currentTheme);
        changeTheme();
        return currentTheme;
    },
    setTheme: function(args) {
        let currentTheme;
        if(!args)
            currentTheme = this.getTheme();
        else
            currentTheme = args;
        changeTheme();
        return currentTheme;
    }
}

export const changeTheme = () => {
    const currentTheme = ThemeController.getTheme();
    document.body.classList.remove('lightMode', 'darkMode');
    document.body.classList.add(currentTheme);
}