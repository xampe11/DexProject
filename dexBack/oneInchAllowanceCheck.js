const axios = require("axios")
const express = require("express")
const app = express()
const port = 3002
const cors = require("cors")
require("dotenv").config()

app.use(cors())
app.use(express.json())

app.get("/allowanceCheck", (req, res) => {
    const { query } = req

    async function httpCall() {
        const url = "https://api.1inch.dev/swap/v6.0/1/approve/allowance"

        const config = {
            headers: {
                Authorization: "Bearer " + process.env.ONEINCH_API_KEY,
            },
            params: {
                tokenAddress: query.tokenAddress,
                walletAddress: query.walletAddress,
            },
        }

        console.log(
            "Token Address: " + query.tokenAddress,
            "Wallet Address: " + query.walletAddress
        )

        try {
            const response = await axios.get(url, config)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return res.status(200).json(httpCall())
})

app.listen(port, () => {
    console.log(`Listening for API Calls, port:${port}`)
})
