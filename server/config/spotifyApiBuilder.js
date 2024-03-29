const SpotifyWebApi = require("spotify-web-api-node")

class apiBuilder {
    constructor() {
        this.api = new SpotifyWebApi({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })

        return this
    }

    setAccessToken(token) {
        this.api.setAccessToken(token)
        return this
    }

    setRefreshToken(token) {
        this.api.setRefreshToken(token)
        return this
    }

    build() {
        return this.api
    }
}

const useApi = (req) => {
    const { accessToken, refreshToken } = req.user

    if (!accessToken) {
        throw new Error("no access token found")
    }

    if (!refreshToken) {
        throw new Error("no access token found")
    }

    return new apiBuilder()
        .setAccessToken(accessToken)
        .setRefreshToken(refreshToken)
        .build()
}

module.exports = { apiBuilder, useApi }
