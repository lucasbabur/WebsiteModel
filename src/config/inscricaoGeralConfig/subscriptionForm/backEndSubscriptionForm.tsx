import { setDoc, doc, getDoc } from "firebase/firestore";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { FormFieldsInterface, FormFields } from "./interface";

interface errorResponseFormat {
  error: string;
}

export async function GetCurrentUser(auth: Auth): Promise<string | null> {
  const user = auth.currentUser;
  if (user) {
    return user.uid;
  } else {
    console.error("There is no user logged in.");
    return null;
  }
}

export async function ReadData(
  userUID: string,
  db: Firestore,
): Promise<FormFieldsInterface | errorResponseFormat> {
  const docRef = doc(db, "sampleCollection", userUID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const response: FormFieldsInterface = Object.keys(FormFields).reduce(
      (acc, key) => {
        acc[key as keyof FormFieldsInterface] = data[key];
        return acc;
      },
      {} as FormFieldsInterface,
    );
    return response;
  } else {
    console.error("User document does not exist");
    return FormFields;
  }
}

export async function WriteData(
  auth: Auth,
  db: Firestore,
  values: FormFieldsInterface,
) {
  const userUID = await GetCurrentUser(auth);
  if (userUID) {
    await setDoc(doc(db, "sampleCollection", userUID), values);
  }
}
