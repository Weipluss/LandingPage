$.i18n().load({
    en: {
        congratulations: 'Félicitations ! 🎉',
        win: 'Vous avez une chance de gagner',
        message: `Félicitations ! Vous êtes sélectionné(e) pour gagner l'iPhone 16 Pro Apple !
Inscrivez-vous avant la fin du compte à rebours !
<strong>Dàll ci sa mbir !
Jàngal sa càll ! Jàmm ak mbokk !</strong>`,
        hurryUp: `Yëggo-Yëggo ! ⏳ Sunu waxtu wii di daw !`,
        button: 'continuer'
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