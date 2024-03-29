const express = require("express");

const api = require("./api");

module.exports = (app) => {
    // API
    app.use("/api", api);

    // API assets
    app.use("/assets", express.static("../assets"));

    // Handle front-end requests
    app.use(express.static("../../client/dist"));

    // 500
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({
            success: false,
            error: "INTERNAL_SERVER_ERROR",
            message: err.message,
            stack: err.stack,
        });
    });
};
