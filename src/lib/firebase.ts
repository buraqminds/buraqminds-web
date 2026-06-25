import { initializeApp, getApp, getApps } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  type Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db: Firestore = getFirestore(app);

export type LeadData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export type AssessmentData = {
  email: string;
  service: string;
  scope: string;
  timeline: string;
  aiRecommendation: string;
};

export async function saveLead(data: LeadData): Promise<void> {
  try {
    await addDoc(collection(db, "leads"), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Failed to save lead:", error);
    throw error;
  }
}

export async function saveAssessment(data: AssessmentData): Promise<void> {
  try {
    await addDoc(collection(db, "assessments"), {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Failed to save assessment:", error);
    throw error;
  }
}
