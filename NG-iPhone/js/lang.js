$.i18n().load({
    en: {
        congratulations: 'Congratulations! 🎉',
        win: 'You have a chance to win.',
        message: `You have been selected for a chance to win an Apple iPhone 16 Pro.
Register before the timer runs out.
<strong>The sooner you register, the better your chances of winning!</strong>`,
        hurryUp: `Hurry 🔥 before it's over!`,
        button: 'Continue'
    },
    id: {
        congratulations: 'Selamat! 🎉',
        win: 'Anda memiliki kesempatan untuk menang.',
        message: `Anda telah dipilih untuk mendapatkan kesempatan memenangkan Apple iPhone 16 Pro.
Daftar sebelum waktu habis.
<strong>Semakin cepat Anda mendaftar, semakin besar peluang Anda untuk menang!</strong>`,
        hurryUp: `Cepat 🔥 sebelum kesempatan ini berakhir!`,
        button: 'Lanjutkan'
    }
})
    .done(function () {
        function get_browser_locale() {
            let lang = navigator.language || navigator.userLanguage;
            lang = lang.split('-')[0]; 
            return ['en', 'id'].includes(lang) ? lang : 'en'; 
        }
    
        function i18n_set_locale(locale = '') {
            if (locale) {
                $.i18n().locale = locale;
            }
            $('html').i18n();
            $('input[placeholder][data-i18n]').each(function () {
                $(this).prop('placeholder', $.i18n($(this).data('i18n')));
            });
        }
        const userLocale = get_browser_locale(); 
        i18n_set_locale(userLocale); 
    });