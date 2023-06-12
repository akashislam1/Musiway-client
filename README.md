## Live Link

- Hosted in Firebase -> [Musiway](https://musiway-school.web.app/)

**Admin Email & Password**

- Email : admin@gmail.com
- Password : #Admin

**Instructor Email & Password**

- Email : naimul10@islam.com
- Password : A@12345

## ADDED FEATURES :

<!-- Student Dashboard: -->

**Student Dashboard:**

**_It is private & only a student can access this route._**

- **My Selected Classes:** The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete, and Pay buttons. On clicking the Delete button, a student can remove a selected Class from the list.

- **My Enrolled Classes:** Show all the Classes a student selected after successful payment.

  <br/>

**Payment: (Student Dashboard)**

- **Pay button Action:** Upon clicking the **Pay button** for a Class on the My Selected Classes, the student will be redirected to the payment page to finalize their payment. After a successful payment, the **Available seats** for the particular Class will be reduced by 1. The Class information will be shown on the **My Enrolled Classes page** pageand removed from the **My Selected Classes page**.
- Create a payment history page for students. It will show the payment made by that student.

<br/>
<!-- Instructor Dashboard -->

**Instructor Dashboard:**

**_It is private & only an instructor can access this route._**

- **Add a Class:** A Instructor When creating a class on the database, the value of the status field will be pending.

- **My Classes:** Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Feedback & Update button.

<br/>
<!-- Admin Dashboard: -->

**Admin Dashboard:**

**_It is private & only an admin can access this route._**

- **Manage Classes:** This page will show all the Classes. All the classes added by the Instructor from the Add Class page will be displayed here. Show the following information: Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).

  > **Note:** By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.

  > **Note:** If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled.

  > **Note:** A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor. You can also do this in another route except for the modal.
  > </br>

  - **Manage Users:** The admin can see the relevant information of all registered users. By default, everyone will be a student. And there will be **2 buttons**: **Make Instructor** button and **Make Admin** button. If a **ADMIN** clicks any of the buttons, disable it.

  - **Make Instructor button Action:** Update the user role as an instructor.

  - **Make Admin button Action:** Update the user role as an admin.
    </br>

## React Router Dom v6.4

- Documentation Link -> [Link](https://reactrouter.com/en/main)

## Firebase Authentication System

- Documentation Link -> [Link](https://firebase.google.com/docs/auth?authuser=0&hl=en)

## Headless UI

Documentation Link -> [Link](https://headlessui.com/)

## Animation System

- Documentation Link -> [ AOS Package ](https://michalsnik.github.io/aos/)
- Documentation Link -> [ React-awesome-reveal](https://react-awesome-reveal.morello.dev/)

## SweetAlert2

- Documentation Link -> [Link](https://sweetalert2.github.io/#examples)

## Resources & Credits

- Icon -> [React Icon](https://react-icons.github.io/react-icons/)
- Icon -> [IconScout ](https://iconscout.com/)

- Tailwind Css -> [Tailwind Css](https://tailwindcss.com/)
- daisyUI -> [daisyUI](https://daisyui.com/)
