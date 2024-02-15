// // package com.example.backend.entity;




// // import java.util.Date;

// // import jakarta.persistence.Entity;
// // import jakarta.persistence.GeneratedValue;
// // import jakarta.persistence.GenerationType;
// // import jakarta.persistence.Id;

// // @Entity
// // public class CustomizedPartyBooking {

// //     @Id
// //     @GeneratedValue(strategy = GenerationType.IDENTITY)
// //     private Long id;

// //     private String customerName;
// //     private Date bookingDate;
// //     private String partyTheme;
// //     private int numberOfGuests;

// //     public Long getId() {
// //         return this.id;
// //     }

// //     public void setId(Long id) {
// //         this.id = id;
// //     }

// //     public String getCustomerName() {
// //         return this.customerName;
// //     }

// //     public void setCustomerName(String customerName) {
// //         this.customerName = customerName;
// //     }

// //     public Date getBookingDate() {
// //         return this.bookingDate;
// //     }

// //     public void setBookingDate(Date bookingDate) {
// //         this.bookingDate = bookingDate;
// //     }

// //     public String getPartyTheme() {
// //         return this.partyTheme;
// //     }

// //     public void setPartyTheme(String partyTheme) {
// //         this.partyTheme = partyTheme;
// //     }

// //     public int getNumberOfGuests() {
// //         return this.numberOfGuests;
// //     }

// //     public void setNumberOfGuests(int numberOfGuests) {
// //         this.numberOfGuests = numberOfGuests;
// //     }

// //     @Override
// //     public String toString() {
// //         return "{" +
// //             " id='" + getId() + "'" +
// //             ", customerName='" + getCustomerName() + "'" +
// //             ", bookingDate='" + getBookingDate() + "'" +
// //             ", partyTheme='" + getPartyTheme() + "'" +
// //             ", numberOfGuests='" + getNumberOfGuests() + "'" +
// //             "}";
// //     }

// //     // Constructor, getters, and setters
// // }




// package com.example.backend.entity;

// import java.util.Date;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class CustomizedPartyBooking {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String yourName; // Updated variable name
//     private String venueType; // Updated variable name
//     private String location; // Updated variable name
//     private Date date; // Updated variable name
//     private String additionalInfo; // Updated variable name

//     public Long getId() {
//         return this.id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getYourName() {
//         return this.yourName;
//     }

//     public void setYourName(String yourName) {
//         this.yourName = yourName;
//     }

//     public String getVenueType() {
//         return this.venueType;
//     }

//     public void setVenueType(String venueType) {
//         this.venueType = venueType;
//     }

//     public String getLocation() {
//         return this.location;
//     }

//     public void setLocation(String location) {
//         this.location = location;
//     }

//     public Date getDate() {
//         return this.date;
//     }

//     public void setDate(Date date) {
//         this.date = date;
//     }

//     public String getAdditionalInfo() {
//         return this.additionalInfo;
//     }

//     public void setAdditionalInfo(String additionalInfo) {
//         this.additionalInfo = additionalInfo;
//     }

//     @Override
//     public String toString() {
//         return "{" +
//             " id='" + getId() + "'" +
//             ", yourName='" + getYourName() + "'" +
//             ", venueType='" + getVenueType() + "'" +
//             ", location='" + getLocation() + "'" +
//             ", date='" + getDate() + "'" +
//             ", additionalInfo='" + getAdditionalInfo() + "'" +
//             "}";
//     }

   
// }
package com.example.backend.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomizedPartyBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String yourName;
    private String venueType;
    private String location;
    private String date; // Changed to String to match frontend
    private String additionalInfo;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYourName() {
        return this.yourName;
    }

    public void setYourName(String yourName) {
        this.yourName = yourName;
    }

    public String getVenueType() {
        return this.venueType;
    }

    public void setVenueType(String venueType) {
        this.venueType = venueType;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAdditionalInfo() {
        return this.additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", yourName='" + getYourName() + "'" +
            ", venueType='" + getVenueType() + "'" +
            ", location='" + getLocation() + "'" +
            ", date='" + getDate() + "'" +
            ", additionalInfo='" + getAdditionalInfo() + "'" +
            "}";
    }
}
