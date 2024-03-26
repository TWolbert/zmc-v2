"use server";

import { client } from "./db";
import { hash, compare } from "bcryptjs";

export type User = {
    id: number;
    username: string;
    password: string;
    role: number;
};

export async function Signin(username: string, password: string) {
    if (!username) {
        return {
            error: "Please enter a username",
        };
    }

    if (!password) {
        return {
            error: "Please enter a password",
        };
    }

    const res = await client.execute(
        {
            sql: "SELECT * FROM users WHERE username = ?",
            args: [username],
        }
    );

    if (res.rows.length === 0) {
        return {
            error: "User not found",
        };
    }

    const user: User = res.rows[0] as unknown as User;

    const valid = await compare(password, user.password);

    if (!valid) {
        return {
            error: "Invalid password",
        };
    }

    return {
        message: "Logged in",
    };
}

export async function Signup(username: string, password: string) { 
    const passwordHash = await hash(password, 12);

    const res = await client.execute(
        {
            sql: "INSERT INTO users (username, password, ROLE) VALUES (?, ?, ?)",
            args: [username, passwordHash, 0],
        }
    );

    if (res.rowsAffected === 0) {
        return {
            error: "Failed to create user",
        };
     }

    return {
        message: "Success",
    };
}

export async function CreateTables() {
    // Create SQLite table for users
    await client.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            ROLE INTEGER NOT NULL
        );
    `);

    // Create SQLite table for posts
    await client.execute(`
    CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            author INTEGER NOT NULL
        );
    `);

    // Create SQLite table for videos
    await client.execute(`
    CREATE TABLE IF NOT EXISTS videos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            url TEXT NOT NULL,
            author INTEGER NOT NULL
        );
    `);

    return {
        message: "Tables created",
    };
}
