const { DataTypes } = require("sequelize");

/**
 * @param {Sequelize} sequelize
 */
module.exports = (sequelize) => {
    return sequelize.define(
        "Translation",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                unique: true,
                primaryKey: true,
            },
            project: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            file: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            key: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            language: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            translation: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            author: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            created: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            approved: {
                type: DataTypes.UUID,
                allowNull: true,
            },
            approvedOn: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            timestamps: false,
        }
    );
};
