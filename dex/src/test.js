require("dotenv").config()

async function main() {
    console.log(process.env.REACT_APP_ONEINCH_API_KEY)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
