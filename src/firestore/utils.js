import {
    collection,
    setDoc,
    updateDoc,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    query,
    where,
    orderBy
  } from "firebase/firestore";
import { db } from "../utils/firebase-config";
    
    // create user
    export function createUser(userData, id) {
        const userDoc = doc(db, "users", id);
        return setDoc(userDoc, userData);
    }
    export function updateUser(userData, id) {
        const userDoc = doc(db, "users", id);
        return updateDoc(userDoc, userData);
    }
    
    // delete user
    export function deleteUser(id) {
        const userDoc = doc(db, "users", id);
        return deleteDoc(userDoc);
    }

    // get user
    export function getUser(id) {
        const userDoc = doc(db, "users", id);
        return getDoc(userDoc);
    }
    
    // get all users
    export function getUsers() {
        return getDocs(collection(db, "users"));
    }

    // ==> Rooms <== //

    // create room
    export function createRoom(roomData) {
        const roomRef = doc(collection(db, "rooms"));
        return setDoc(roomRef, roomData);
    }

    // get all rooms
    export function getRooms() {
        return getDocs(collection(db, "rooms"));
    }
    
    export function getRoomsByLocation(location) {
        const roomsRef = collection(db, "rooms");
        const q = query(roomsRef, where("location", "==", location));
        return getDocs(q);
    }

    export function getUserRoom(userID) {
        const roomsRef = collection(db, "rooms");
        const q = query(roomsRef, where("userID", "==", userID));
        return getDocs(q);
    }

    // get room
    export function getRoom(roomID) {
        const roomDoc = doc(db, "rooms", roomID);
        return getDoc(roomDoc);
    }

    // ==> profiles <== // 

    export function getProfiles() {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy(`ProfileListing`));
        return getDocs(q);
    }

    export function getProfilesByLocation(location) {
        const usersRef = collection(db, "users");
        const q = query(usersRef, orderBy(`ProfileListing`), where("ProfileListing.location", "==", location));
        return getDocs(q);
    }