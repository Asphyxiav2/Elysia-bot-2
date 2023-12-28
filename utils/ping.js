const axios = require('axios');
const chalk = require('chalk');

async function pingMe() {
    if (typeof process.env.REPL_SLUG !== 'undefined') {
        let baseUrl = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;

        try {
            const response = await axios.request({
                url: baseUrl,
                method: 'GET',
                timeout: 5000,
                headers: {
                    'Connection': "keep-alive",
                    'Host': `${baseUrl.replace('https://', '')}`,
                    'Accept-Language': 'en-US,en;q=0.9',
                    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
                    'Sec-Ch-Ua-Platform': '"Linux"',
                    
                    'Sec-Ch-Ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                    'Upgrade-Insecure-Requests': 1,
                    'DNT': 1
                }
            });
            console.log(chalk.bold.hex("#ffd700")("[SaikiDesu]") + chalk.bold.green("[UP] ") + chalk.blue(baseUrl));
        } catch (error) {
            console.error(error);
            console.log(chalk.bold.hex("#ffd700")("[SaikiDesu]") + chalk.bold.red("[DOWN] ") + chalk.blue(baseUrl));
            console.log('Restarting....');
            process.exit(1);
        }
    }
}


setInterval(pingMe, 59000);