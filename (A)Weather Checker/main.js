// Function to update the greeting based on the time of day
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good night';
    }

    document.getElementById('greeting').innerText = greeting;
}

// Update greeting on page load
updateGreeting();

// Update greeting every 5 minutes
setInterval(updateGreeting, 300000);

// Fetch and display weather data
function fetchWeatherData() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
        .then(response => response.json())
        .then(data => {
            // Menampilkan data cuaca saat ini
            const currentWeather = data.current;
            document.getElementById('current-time').textContent = `Time: ${currentWeather.time}`;
            document.getElementById('current-temperature').textContent = `Temperature at 2m: ${currentWeather.temperature_2m}°C`;
            document.getElementById('current-wind-speed').textContent = `Wind Speed at 10m: ${currentWeather.wind_speed_10m} m/s`;

            // Menampilkan data cuaca per jam satu per satu
            const hourlyWeather = data.hourly;
            let currentIndex = 0;

            function updateHourlyWeather() {
                if (currentIndex >= hourlyWeather.time.length) {
                    currentIndex = 0;
                }

                document.getElementById('hourly-data').innerHTML = `
                    <p>Time: ${hourlyWeather.time[currentIndex]}</p>
                    <p>Temperature at 2m: ${hourlyWeather.temperature_2m[currentIndex]}°C</p>
                    <p>Relative Humidity at 2m: ${hourlyWeather.relative_humidity_2m[currentIndex]}%</p>
                    <p>Wind Speed at 10m: ${hourlyWeather.wind_speed_10m[currentIndex]} m/s</p>
                `;

                currentIndex++;
            }

            // Update hourly weather every 10 seconds
            updateHourlyWeather();
            setInterval(updateHourlyWeather, 10000);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Fetch weather data on page load
fetchWeatherData();

const quotes = [
    "Satu-satunya batasan untuk realisasi masa depan kita adalah keraguan kita hari ini. - Franklin D. Roosevelt",
    "Jangan menunggu sampai besi panas untuk memukulnya, tetapi buatlah panas dengan memukulnya. - William Butler Yeats",
    "Cara terbaik untuk meramalkan masa depan adalah dengan menciptakannya. - Alan Kay",
    "Anda melewatkan 100% tembakan yang tidak Anda ambil. - Wayne Gretzky",
    "Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan. Jika Anda mencintai apa yang Anda lakukan, Anda akan sukses. - Albert Schweitzer",
    "Hidup adalah apa yang terjadi saat kamu sibuk membuat rencana lain. - John Lennon",
    "Kebahagiaan bukanlah sesuatu yang sudah jadi. Itu berasal dari tindakan Anda sendiri. - Dalai Lama",
    "Hidup ini terlalu singkat untuk dihabiskan dalam permusuhan. - Abraham Lincoln",
    "Jangan pernah menyerah pada mimpi hanya karena waktu yang dibutuhkan untuk mencapainya. Waktu akan berlalu juga. - Earl Nightingale",
    "Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita meresponsnya. - Charles R. Swindoll",
    "Kebahagiaan adalah ketika apa yang kamu pikirkan, apa yang kamu katakan, dan apa yang kamu lakukan dalam harmoni. - Mahatma Gandhi",
    "Kesuksesan tidak diukur dengan posisi yang telah dicapai seseorang dalam hidup, melainkan oleh hambatan yang dia atasi saat mencoba untuk sukses. - Booker T. Washington",
    "Bekerja keras dalam kesunyian, biarkan kesuksesanmu menjadi kegaduhan. - Frank Ocean",
    "Percayalah kamu bisa, setengah jalan sudah tercapai. - Theodore Roosevelt",
    "Kebesaran tidak muncul dari apa yang kamu miliki, tetapi dari siapa kamu. - Alice Walker",
    "Hidup adalah perjalanan yang harus dijalani, bukan masalah yang harus diselesaikan. - Winnie the Pooh",
    "Kunci untuk memulai adalah berhenti berbicara dan mulai melakukan. - Walt Disney",
    "Orang yang berani adalah orang yang dapat menaklukkan ketakutannya, bukan orang yang tidak memiliki ketakutan. - Nelson Mandela",
    "Kesuksesan adalah kemampuan untuk melangkah dari kegagalan ke kegagalan tanpa kehilangan antusiasme. - Winston Churchill",
    "Jangan biarkan hari kemarin mengambil terlalu banyak hari ini. - Will Rogers",
    "Perubahan adalah hukum kehidupan. Dan mereka yang hanya melihat ke masa lalu atau masa kini pasti akan merindukan masa depan. - John F. Kennedy",
    "Hidup adalah serangkaian pelajaran yang harus dijalani untuk dipahami. - Helen Keller",
    "Kebahagiaan adalah seni untuk tidak pernah mengingat apa yang tidak menyenangkan. - Robert Louis Stevenson",
    "Kebesaran adalah hasil dari pengorbanan yang besar. - Napoleon Hill",
    "Jangan pernah bermimpi untuk sukses, tetapi bekerja untuk itu. - Estee Lauder",
    "Keberanian adalah harga yang dibayar kehidupan untuk memberikan perdamaian. - Amelia Earhart",
    "Hal-hal besar tidak pernah datang dari zona nyaman. - Ben Francia",
    "Lebih baik gagal dalam orisinalitas daripada sukses dalam imitasi. - Herman Melville",
    "Mimpi tidak menjadi kenyataan melalui sihir; dibutuhkan keringat, tekad, dan kerja keras. - Colin Powell",
    "Kesuksesan tidak final, kegagalan tidak fatal: itu adalah keberanian untuk melanjutkan yang penting. - Winston Churchill",
    "Tidak ada rahasia untuk sukses. Itu adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan. - Colin Powell",
    "Kamu tidak bisa menghubungkan titik-titik dengan melihat ke depan; kamu hanya bisa menghubungkannya dengan melihat ke belakang. - Steve Jobs",
    "Jika kamu ingin hidup bahagia, kaitkan itu dengan tujuan, bukan dengan orang atau benda. - Albert Einstein",
    "Jangan biarkan suara pendapat orang lain menenggelamkan suara batinmu sendiri. - Steve Jobs",
    "Kamu hanya hidup sekali, tetapi jika kamu melakukannya dengan benar, sekali sudah cukup. - Mae West",
    "Jangan pernah bermimpi untuk sukses, tetapi bekerja untuk itu. - Estee Lauder",
    "Hidup ini terlalu singkat untuk dihabiskan dalam permusuhan. - Abraham Lincoln",
    "Bekerja keras dalam kesunyian, biarkan kesuksesanmu menjadi kegaduhan. - Frank Ocean",
    "Percayalah kamu bisa, setengah jalan sudah tercapai. - Theodore Roosevelt",
    "Kebesaran tidak muncul dari apa yang kamu miliki, tetapi dari siapa kamu. - Alice Walker",
    "Hidup adalah perjalanan yang harus dijalani, bukan masalah yang harus diselesaikan. - Winnie the Pooh",
    "Kunci untuk memulai adalah berhenti berbicara dan mulai melakukan. - Walt Disney",
    "Orang yang berani adalah orang yang dapat menaklukkan ketakutannya, bukan orang yang tidak memiliki ketakutan. - Nelson Mandela",
    "Kesuksesan adalah kemampuan untuk melangkah dari kegagalan ke kegagalan tanpa kehilangan antusiasme. - Winston Churchill",
    "Jangan biarkan hari kemarin mengambil terlalu banyak hari ini. - Will Rogers",
    "Perubahan adalah hukum kehidupan. Dan mereka yang hanya melihat ke masa lalu atau masa kini pasti akan merindukan masa depan. - John F. Kennedy",
    "Hidup adalah serangkaian pelajaran yang harus dijalani untuk dipahami. - Helen Keller",
    "Kebahagiaan adalah seni untuk tidak pernah mengingat apa yang tidak menyenangkan. - Robert Louis Stevenson",
    "Kebesaran adalah hasil dari pengorbanan yang besar. - Napoleon Hill",
    "Jangan pernah bermimpi untuk sukses, tetapi bekerja untuk itu. - Estee Lauder",
    "Keberanian adalah harga yang dibayar kehidupan untuk memberikan perdamaian. - Amelia Earhart",
    "Hal-hal besar tidak pernah datang dari zona nyaman. - Ben Francia",
    "Lebih baik gagal dalam orisinalitas daripada sukses dalam imitasi. - Herman Melville"
];

// Fungsi untuk mendapatkan kutipan acak
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Fungsi untuk memperbarui kutipan setiap 5 detik
function updateQuote() {
    document.getElementById('quote-box').textContent = getRandomQuote();
}

// Panggil fungsi updateQuote setiap 5 detik
setInterval(updateQuote, 10000);

// Menampilkan kutipan saat halaman pertama kali dimuat
updateQuote();
