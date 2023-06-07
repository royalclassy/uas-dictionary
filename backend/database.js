import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getAllHistory(username) {
  const [rows] = await pool.query("SELECT * FROM history");
  return rows.filter((history) => history.username === username);
}

export async function addHistory(keyword, username) {
  const [rows] = await pool.query(
    "insert into history (username, keyword) values (?, ?)",
    [username, keyword]
  );
  return rows;
}

export async function userLogin(username) {
  const [rows] = await pool.query("select * from user where username = ?", [
    username,
  ]);

  return rows[0];
}

export async function editHistory(historyID, newKeyword, username) {
  try {
    const [rows] = await pool.query(
      "update history set keyword = ? where historyID = ?",
      [newKeyword, historyID]
    );
    const editStatus = { ...rows, status: true };
    if (editStatus.status) {
      const res = await getAllHistory(username);
      return res;
    }
    return editStatus;
  } catch (error) {
    return { message: error.message, status: false };
  }
}

export async function deleteHistory(historyID, username) {
  try {
    const [rows] = await pool.query("delete from history where historyID = ?", [
      historyID,
    ]);
    return rows;
  } catch (error) {
    return { message: error.message, status: false };
  }
}

export async function userRegister(username, password) {
  try {
    const [rows] = await pool.query(
      "insert into user (username, password) values (?, ?)",
      [username, password]
    );
    console.log(rows);
    return { ...rows, status: true };
  } catch (error) {
    return { message: "Username has been used", status: false };
  }
}
