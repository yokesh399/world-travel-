const hero = document.querySelector('.hero');
const images = [
    'https://www.ghumindiaghum.com/blog/wp-content/uploads/2022/09/best-travel-agency.jpg',
    'https://graphicsinn1.com/wp-content/uploads/2022/02/3d-wallpaper-for-travaling-company-vector-file-1024x583.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5X9N4t6OnbUviyGIq1L-c9bNXwlXTqHINCwxe9FHuZLl-4UhOM5F5zbBk8Y2fBu_EuEyQ8Z3tvOoTtQ_1vnFu5wvmf_MVCWra84Ix9k4YYH0daiFSve4LVzDuDV_fUJN5GcNKgpPe/s1600/1+%25282%2529.jpg',
    'https://www.travellineholidays.com/galleryimg/6128851exotic%20rajasthan.jpg'
];

let index = 0;

function changeHeroImage() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

setInterval(changeHeroImage, 3000); // Change every 5 seconds



const packages = [
    { 
        name: "FRANCE,PARIS", 
        description: "Experience the romance of the Eiffel Tower.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaEFU4wVV_RCzX2-Hg68PMy1ZpyaNosYhXnA&s", 
        detailImage: "https://cdn.pixabay.com/photo/2020/04/17/14/34/eiffel-tower-5055438_640.jpg", 
    
        costPerPerson: 50000,
        type: "international" 
    },
    { 
        name: "AUSTRALIA", 
        description: "Discover the Great Barrier Reef and vibrant cities.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvGTTcSzdkehlziAraRsB1Bq8s759XynSfA&s", 
        detailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtH9EL6s7WDg72sFoqXeFWBzuWp5uYn_w1Rg&s", 
        costPerPerson: 80000,
        type: "international" 
    },
    { 
        name: "GOA", 
        description: "Relax on the sunny beaches of Goa.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhNi47apU6gnziISxup--8WVlvQxC0NyAdw&s", 
        detailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvVzg5c8bjWJyzuKBNqqIKQHa58EpuV-_bQ&s", 
        costPerPerson: 15000,
        type: "national" 
    },
    { 
        name: "KERALA", 
        description: "Sail along Kerala's backwaters in traditional boats.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZINOskyddCwkRSeHPAWGo2QEGwCRdYi-Hg&s", 
        detailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsik5IbePSK11RwahYLbzjtjpUU1_70lnf_A&s", 
        costPerPerson: 12000,
        type: "national" 
    },
    { 
        name: "THANJAVUR", 
        description: "Explore the historical temples and architecture of Thanjavur.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRw8iynVOi1OYASCZ_nsYF1bCQpzho2XE9kQ&s", 
        detailImage: "https://media.istockphoto.com/id/516179590/photo/brihadishwara-temple-tanjore.jpg?s=612x612&w=0&k=20&c=vjmaZrr4RhhxewTJvgzfpkki4mLM0uDmdwHY5HasrHY=", 
        costPerPerson: 1200,
        type: "states" 
    },
    { 
        name: "OOTY", 
        description: "Explore the mountain and waterfalls in ooty", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OqFT60mDOAiwTz-ZyWTy0QxzcTDkt_sGxEbB_RBSo252uuomIlCLqOzlL8dZHhEIPC0&usqp=CAU", 
        detailImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLkh5uAeK_5c4ktaWMGvewJyNzqAtCPkhLA&s",
        costPerPerson: 2500,
        type: "states" 
    },
    { 
        name: "KODAIKANAL", 
        description: "Explore the mountain and waterfalls in kodaikanal", 
        image: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1731066572911_lm2r9_4235x2000.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75", 
        detailImage: "https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/ZtcFc7zzk9ZrW651_jpeg-optimizer_KodaiAvocadoHill_Onthewaytosummit_Radhikabaviskar.jpg?&func=crop&q=70&org_if_sml=1",
        costPerPerson: 3500,
        type: "states" 
    },
    { 
        name: "SRILANKA", 
        description: "Explore the beauty of srilanka", 
        image: "https://cdn.vectorstock.com/i/1000v/63/79/sri-lanka-travel-destination-vector-24466379.jpg", 
        detailImage: "https://yeadimtours.com/wp-content/uploads/2020/01/%D7%A7%D7%95%D7%9C%D7%90%D7%96-%D7%A1%D7%A8%D7%99-%D7%9C%D7%A0%D7%A7%D7%94-1.jpg",
        costPerPerson: 10000,
        type: "international" 
    },
    { 
        name: "MALAYSIA", 
        description: "Explore the mountain and waterfalls in ooty", 
        image: "https://www.shutterstock.com/image-vector/vector-illustration-doodle-showing-architecture-260nw-430974721.jpg", 
        detailImage: "https://indomedtravel.com/images/malaysia.jpg",
        costPerPerson: 25000,
        type: "international" 
    },
    { 
        name: "DUBAI", 
        description: "Explore the desert and bulding of dubai", 
        image: "https://www.shutterstock.com/image-vector/logo-dubai-representation-buildings-city-260nw-1717892704.jpg", 
        detailImage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dubai-travel-photo-collage-design-template-be014ddfec66fa939d751a52686fa2b4_screen.jpg?ts=1698347393",
        costPerPerson: 65000,
        type: "international" 
    },
];


let bookings = [];
function showDestinations(typeOrArray) {
    const filteredPackages = Array.isArray(typeOrArray)
        ? typeOrArray
        : typeOrArray === "all"
        ? packages
        : packages.filter(pkg => pkg.type === typeOrArray);
        const packagesToShow = filteredPackages.slice(0, 3);
    const container = document.getElementById('packagesContainer');
    container.innerHTML = '';
    filteredPackages.forEach(pkg => {
        container.innerHTML += `
            <div class="package">
                <img src="${pkg.image}" alt="${pkg.name}">
                <h3>${pkg.name}</h3>
                <p>${pkg.description}</p>
                <p><strong>Cost per person:</strong> ₹${pkg.costPerPerson}</p>
                <button onclick="openBookingForm('${pkg.name}', ${pkg.costPerPerson})">Book Now</button>
            </div>
        `;
    });
}

window.onload = function() {
    showDestinations('all'); 
};

window.onload = function() {
    showDestinations('all'); 
};

function openBookingForm(name, cost) {
    const pkg = packages.find(pkg => pkg.name === name);
    if (pkg) {
        
        document.getElementById('packageName').innerText = pkg.name;
        document.getElementById('costPerPerson').innerText = pkg.costPerPerson;
        document.getElementById('totalCost').innerText = pkg.costPerPerson;
        
        document.getElementById('packageDetailImage').src = pkg.detailImage;
      
        document.getElementById('bookingForm').style.display = 'block';
        const travelOptionSelect = document.getElementById('travelOption');
        const flightClassDiv = document.getElementById('flightClassDiv');
        const coachTypeDiv = document.getElementById('coachTypeDiv');

        coachTypeDiv.style.display = 'none'; 
        travelOptionSelect.disabled = false;  


       s
        if (pkg.type === "international") {
            travelOptionSelect.innerHTML = `
                <option value="flight" selected>Flight</option>
            `; 
            travelOptionSelect.disabled = true;  
            flightClassDiv.style.display = 'block';  
        } else {
            travelOptionSelect.innerHTML = `
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="flight">Flight</option>
            `; 
            travelOptionSelect.disabled = false;
            flightClassDiv.style.display = 'none';
        }
    }
}

function toggleTravelOption() {
    const travelOption = document.getElementById('travelOption').value;
    const flightClassDiv = document.getElementById('flightClassDiv');
    const coachTypeDiv = document.getElementById('coachTypeDiv');
   
    if (travelOption === 'flight') {
        flightClassDiv.style.display = 'block';
        coachTypeDiv.style.display = 'none'; 
    } else if (travelOption === 'train') {
        flightClassDiv.style.display = 'none'; 
        coachTypeDiv.style.display = 'block'; 
    } else {
        flightClassDiv.style.display = 'none';
        coachTypeDiv.style.display = 'none'; 
    }
}

document.getElementById('travelOption').addEventListener('change', toggleTravelOption);

window.onload = function() {
    toggleTravelOption(); 
};

function updateTotalCost() {
    const numPeople = document.getElementById('numPeople').value;
    const costPerPerson = parseFloat(document.getElementById('costPerPerson').innerText);
    const returnDate = document.getElementById('returnDate').value;
    const fromDate = document.getElementById('fromDate').value;
    const guideOption = document.querySelector('input[name="guide"]:checked')?.value;
    
    const packageName = document.getElementById('packageName').innerText;
    const selectedPackage = packages.find(pkg => pkg.name === packageName);
   
    let additionalCost = 0;
    if (fromDate && returnDate) {
        const from = new Date(fromDate);
        const to = new Date(returnDate);
        const timeDifference = to - from;
        const numberOfDays = timeDifference / (1000 * 3600 * 24);
        const extraCostPerDay = 500; 
        if (numberOfDays > 0) {
            additionalCost = numberOfDays * extraCostPerDay;
        }
    }
    
    let guideCost = 0;
    if (guideOption === 'yes') {
        if (selectedPackage.type === "international") {
            guideCost = 5000; 
        } else if (selectedPackage.type === "national") {
            guideCost = 3000; 
        } else if (selectedPackage.type === "states") {
            guideCost = 1500; 
        }
    }
    
    let flightClassCost = 0;
    const flightClass = document.getElementById('flightClass')?.value;
    if (flightClass === 'economy') {
        flightClassCost = 5000; 
    } else if (flightClass === 'business') {
        flightClassCost = 10000; 
    } else if (flightClass === 'firstClass') {
        flightClassCost = 15000; 
    }
    
    const totalCost = (numPeople * costPerPerson) + additionalCost + guideCost + flightClassCost;
    document.getElementById('totalCost').innerText = totalCost;
}

function toggleLanguageField() {
    const guideOption = document.querySelector('input[name="guide"]:checked').value;
    const languageDiv = document.getElementById('languageDiv');
    
    languageDiv.style.display = guideOption === 'yes' ? 'block' : 'none';
}

window.onload = function() {
    const guideOption = document.querySelector('input[name="guide"]:checked')?.value;
    if (guideOption) {
        toggleLanguageField(); 
    }
};

let userBookings = JSON.parse(localStorage.getItem('userBookings')) || [];

function submitBooking() {
    const name = document.getElementById('customerName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const numPeople = document.getElementById('numPeople').value.trim();
    const fromDate = document.getElementById('fromDate').value.trim();
    const returnDate = document.getElementById('returnDate').value.trim();
    const packageName = document.getElementById('packageName').innerText.trim();
    const costPerPerson = document.getElementById('costPerPerson').innerText.trim();
    const totalCost = document.getElementById('totalCost').innerText.trim();
    const travelOption = document.getElementById('travelOption').value;
    const flightClass = travelOption === 'flight' ? document.getElementById('flightClass').value : null;
    const coachType = travelOption === 'train' ? document.getElementById('coachType').value : null;
    const currentCity = document.getElementById('currentCity').value.trim();
    const guideOption = document.querySelector('input[name="guide"]:checked')?.value || 'no';
    const preferredLanguage = guideOption === 'yes' ? document.getElementById('language')?.value : 'None';

    
    if (!name || !email || !phone || !numPeople || !fromDate || !returnDate) {
        alert("Please fill all the required fields.");
        return;
    }

    const bookingId = Date.now(); 
    
    const newBooking = {
        id: bookingId,
        name,
        email,
        phone,
        numPeople,
        fromDate,
        returnDate,
        packageName,
        costPerPerson,
        totalCost,
        guideOption,
        preferredLanguage,
        travelOption,
        flightClass,
        coachType,
        currentCity,
    };

   
    bookings.push(newBooking);

   
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Booking confirmed!');
    document.getElementById('bookingForm').style.display = 'none'; // Hide the form after submission

    
    clearBookingForm();
}

function clearBookingForm() {
    document.getElementById('bookingForm').style.display = 'none'; 
    document.getElementById('customerName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('numPeople').value = '';
    document.getElementById('fromDate').value = '';
    document.getElementById('returnDate').value = '';
    document.getElementById('packageName').innerText = '';  
    document.getElementById('costPerPerson').innerText = ''; 
    document.getElementById('totalCost').innerText = ''; 
    document.getElementById('travelOption').value = 'bus'; 
    document.getElementById('currentCity').value = ''; 
   
    const guideRadios = document.getElementsByName('guide');
    guideRadios.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('language').value = ''; 
}

function searchPackages() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
    const filteredPackages = packages.filter(pkg => pkg.name.toLowerCase().includes(searchQuery));
    
    showDestinations(filteredPackages.slice(0, 3));
}                         
                                              
function clearSearch() {
    document.getElementById('searchQuery').value = ''; 
    showDestinations(packages.slice(0, 3)); 
}

function filterByType() {
    const filterType = document.getElementById('destinationType').value;
    showDestinations(filterType); 
}

function authenticateAdmin() {
    
    const existingContainer = document.getElementById('password-container');
    if (existingContainer) {
        existingContainer.remove();
    }

    
    const passwordContainer = document.createElement('div');
    passwordContainer.id = 'password-container';
    passwordContainer.style.position = 'fixed';
    passwordContainer.style.top = '50%';
    passwordContainer.style.left = '50%';
    passwordContainer.style.transform = 'translate(-50%, -50%)';
    passwordContainer.style.padding = '20px';
    passwordContainer.style.background = '#fff';
    passwordContainer.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.3)';
    passwordContainer.style.borderRadius = '10px';
    passwordContainer.style.textAlign = 'center';

 
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter Admin Password';
    passwordInput.style.margin = '10px';
    passwordInput.style.padding = '5px';
    passwordInput.style.width = '200px';

   
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Login';
    submitButton.style.margin = '5px';
    submitButton.style.padding = '5px 10px';
    submitButton.style.cursor = 'pointer';

   
    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.style.margin = '5px';
    cancelButton.style.padding = '5px 10px';
    cancelButton.style.cursor = 'pointer';


    passwordContainer.appendChild(passwordInput);
    passwordContainer.appendChild(submitButton);
    passwordContainer.appendChild(cancelButton);
    document.body.appendChild(passwordContainer);


    submitButton.onclick = function () {
        const enteredPassword = passwordInput.value;
        const correctPassword = 'admin123'; 
        if (enteredPassword === correctPassword) {
            passwordContainer.remove(); 
            showBookedDetails(); 
        } else {
            alert('Incorrect password!');
        }
    };

   
    cancelButton.onclick = function () {
        passwordContainer.remove();
    };
}



function showBookedDetails() {
    const bookedDetailsContainer = document.getElementById('booked-details');
    bookedDetailsContainer.innerHTML = '';
    const table = document.createElement('table');

  
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Number of People</th>
            <th>From Date</th>
            <th>Return Date</th>
            <th>Package Name</th>
            <th>Total Cost</th>
            <th>Guide</th>
            <th>Preferred Language</th>
            <th>Travel Option</th>
            <th>Coach Type</th>
            <th>Flight Class</th>
            <th>Current City</th>
           <th>Status</th> 
        </tr>
    `;

    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.name}</td>
            <td>${booking.email}</td>
            <td>${booking.phone}</td>
            <td>${booking.numPeople}</td>
            <td>${booking.fromDate}</td>
            <td>${booking.returnDate}</td>
            <td>${booking.packageName}</td>
            <td>₹${booking.totalCost}</td>
            <td>${booking.guideOption === 'yes' ? 'Yes' : 'No'}</td>
            <td>${booking.preferredLanguage}</td>
            <td>${booking.travelOption}</td> 
            <td>${booking.travelOption === 'train' ? booking.coachType : 'N/A'}</td>
            <td>${booking.flightClass || 'N/A'}</td> 
            <td>${booking.currentCity}</td>
         <td>${booking.canceled ? 'Canceled' : 'Active'}</td>

            <td>
                <button onclick="removeBooking(${index})" style="background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove</button>
            </td>
        `;

        table.appendChild(row);
    });

 
    bookedDetailsContainer.appendChild(table);

    
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function () {
        bookedDetailsContainer.style.display = 'none';
    };
    bookedDetailsContainer.appendChild(closeButton);
    bookedDetailsContainer.style.display = 'block'; 
}


function removeBooking(index) {
    if (confirm('Are you sure you want to remove this booking?')) {
        bookings.splice(index, 1); 
        localStorage.setItem('bookings', JSON.stringify(bookings)); 
        showBookedDetails();
    }
}


window.onload = function () {
    
    const storedBookings = localStorage.getItem('bookings');
    
    if (storedBookings) {
        bookings = JSON.parse(storedBookings); 
    }

    showDestinations('all'); 
};


    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.onclick = function() {
        bookedDetailsContainer.style.display = 'none';
    };
    bookedDetailsContainer.appendChild(closeButton);
    bookedDetailsContainer.style.display = 'block';
    
function closeBookingForm() {
   
    document.getElementById('bookingForm').style.display = 'none';
 
    document.getElementById('customerName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('numPeople').value = '';
    document.getElementById('fromDate').value = '';
    document.getElementById('returnDate').value = '';
    document.getElementById('packageName').innerText = '';  
    document.getElementById('costPerPerson').innerText = ''; 
    document.getElementById('totalCost').innerText = ''; 
    document.getElementById('travelOption').value = 'bus'; 
    document.getElementById('currentCity').value = ''; 
    
    const guideRadios = document.getElementsByName('guide');
    guideRadios.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('language').value = ''; 
}


function showEmailInput() {
    document.getElementById('initialViewBooking').style.display = 'none';
    document.getElementById('viewBookingDetails').style.display = 'block';
}


function viewCustomerBooking() {
    const email = document.getElementById('customerEmail').value.trim();
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    const customerBooking = bookings.find(booking => booking.email === email);
if (customerBooking) {
        
        const bookingDetailsContainer = document.getElementById('bookingDetailsContainer');
        bookingDetailsContainer.innerHTML = `
            <p><strong>Name:</strong> ${customerBooking.name}</p>
            <p><strong>Email:</strong> ${customerBooking.email}</p>
            <p><strong>Phone:</strong> ${customerBooking.phone}</p>
            <p><strong>Number of People:</strong> ${customerBooking.numPeople}</p>
            <p><strong>From Date:</strong> ${customerBooking.fromDate}</p>
            <p><strong>Return Date:</strong> ${customerBooking.returnDate}</p>
            <p><strong>Package Name:</strong> ${customerBooking.packageName}</p>
            <p><strong>Total Cost:</strong> ₹${customerBooking.totalCost}</p>
            <p><strong>Guide:</strong> ${customerBooking.guideOption === 'yes' ? 'Yes' : 'No'}</p>
            <p><strong>Preferred Language:</strong> ${customerBooking.preferredLanguage || 'None'}</p>
            <p><strong>Travel Option:</strong> ${customerBooking.travelOption}</p>
            <p><strong>Current City:</strong> ${customerBooking.currentCity}</p>
        `;
        
        document.getElementById('customerBookingDetails').style.display = 'block';
    } else {
        alert("No booking found with this email.");
    }
}

function clearBookingDetails() {
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerBookingDetails').style.display = 'none';
    document.getElementById('viewBookingDetails').style.display = 'none';
    document.getElementById('initialViewBooking').style.display = 'block';
}

function cancelViewBooking() {
    document.getElementById('customerEmail').value = ''; 
    document.getElementById('bookingDetailsContainer').innerHTML = ''; 
    document.getElementById('customerBookingDetails').style.display = 'none'; 
    document.getElementById('viewBookingDetails').style.display = 'none'; 
    document.getElementById('initialViewBooking').style.display = 'block'; 
}



function downloadBookingDetails() {
    const bookingContainer = document.getElementById("bookingDetailsContainer");

    if (!bookingContainer || bookingContainer.innerHTML.trim() === "") {
        alert("No booking details available to download.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Booking Details", 14, 15);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    
    let rows = [];
    let headers = ["Field", "Value"];

    const detailsElements = bookingContainer.querySelectorAll("p");
    detailsElements.forEach(detail => {
        let text = detail.innerText.split(":"); 
        if (text.length === 2) {
            let key = text[0].trim();
            let value = text[1].trim();

            
            if (key.toLowerCase().includes("total cost")) {
                value = value.replace(/[^\d.]/g, ""); 
                value = parseFloat(value); 
                if (!isNaN(value)) {
                    value = `₹${value.toFixed(2)}`; 
                } else {
                    value = "₹0.00"; 
                }
            }

            rows.push([key, value]);
        }
    });

    
    doc.autoTable({
        startY: 25,
        head: [headers],
        body: rows,
        theme: "striped",
        styles: { fontSize: 10, cellPadding: 3 },
    });

    
    const finalY = doc.lastAutoTable.finalY + 10; 
    doc.setFont("helvetica", "italic");
    doc.setFontSize(12);
    doc.text("Other details have been sent to your WhatsApp or email.", 14, finalY);
    doc.text("Thank you for booking with World Travel!", 14, finalY + 10);

    
    doc.save("BookingDetails.pdf");
}



function fetchBookingsForCancellation() {
    const email = document.getElementById('cancel-email').value.trim();
    const cancelBookingDetails = document.getElementById('cancel-booking-details');
    
   
    cancelBookingDetails.innerHTML = '';

    if (!email) {
        alert('Please enter a valid email.');
        return;
    }

    
    const userBookings = bookings.filter(booking => booking.email === email);

    if (userBookings.length === 0) {
        cancelBookingDetails.innerHTML = '<p>No bookings found for this email.</p>';
        return;
    }

    
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Package Name</th>
            <th>From Date</th>
            <th>Return Date</th>
            <th>Total Cost</th>
            <th>Cancel</th>
        </tr>
    `;

    userBookings.forEach((booking) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.packageName}</td>
            <td>${booking.fromDate}</td>
            <td>${booking.returnDate}</td>
            <td>₹${booking.totalCost}</td>
            <td><button onclick="cancelBooking('${booking.email}', '${booking.packageName}')">Cancel</button></td>
        `;
        table.appendChild(row);
    });

    cancelBookingDetails.appendChild(table);

    
    document.getElementById('close-cancel-section').style.display = 'block';
}


function cancelBooking(email, packageName) {
    const index = bookings.findIndex(booking => booking.email === email && booking.packageName === packageName);

    if (index !== -1) {
        bookings.splice(index, 1);
        alert(`Your booking for ${packageName} has been canceled.`);

        fetchBookingsForCancellation(); 
    }
}


function closeCancelSection() {
    document.getElementById('cancel-email').value = '';
    document.getElementById('cancel-booking-details').innerHTML = ''; 
    document.getElementById('close-cancel-section').style.display = 'none'; 
}

function showEmailInput() {
    document.getElementById("viewBookingDetails").style.display = "block";
}
document.querySelector("a[href='#cancel-ticket-section']").addEventListener("click", function () {
    document.getElementById("cancel-ticket-section").style.display = "block";
});
function showAdminSection() {
    
    document.getElementById("packages").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("contact-us").style.display = "none";
    document.getElementById("viewBookingDetails").style.display = "none";
    document.getElementById("cancel-ticket-section").style.display = "none";

   
    document.getElementById("admin-section").style.display = "block";
}
function toggleAdminSection() {
    let adminSection = document.getElementById("admin-section");

    if (adminSection.style.display === "none" || adminSection.style.display === "") {
        
        document.getElementById("packages").style.display = "none";
        document.getElementById("about-us").style.display = "none";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("viewBookingDetails").style.display = "none";
        document.getElementById("cancel-ticket-section").style.display = "none";

       
        adminSection.style.display = "block";
    } else {
        
        adminSection.style.display = "none";
    }
}
function toggleAdminSection() {
    let adminSection = document.getElementById("admin-section");

    if (adminSection.style.display === "none" || adminSection.style.display === "") {
       
        adminSection.style.display = "block";
    } else {
        
        adminSection.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("viewBookingDetails").style.display = "none";
    document.getElementById("cancel-ticket-section").style.display = "none";
    document.getElementById("admin-section").style.display = "none";
});

function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    
    if (section.style.display === "none" || section.style.display === "") {
        
        hideAllSections();
       
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        
        section.style.display = "none";
    }
}

function hideAllSections() {
    document.getElementById("viewBookingDetails").style.display = "none";
    document.getElementById("cancel-ticket-section").style.display = "none";
    document.getElementById("admin-section").style.display = "none";
}



function verifyBookingForFeedback() {
    const enteredEmail = document.getElementById("feedbackEmail").value.trim().toLowerCase();
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    console.log("Entered Email:", enteredEmail);
    console.log("Stored Bookings:", bookings);

    const isBooked = bookings.some(booking => booking.email.toLowerCase() === enteredEmail);

    if (isBooked) {
        alert("Email verified! You can now give feedback.");
        document.getElementById("feedbackForm").style.display = "block";
        document.getElementById("feedbackEmailCheck").style.display = "none"; // Hide email input
    } else {
        alert("No booking found with this email. Please book a package first.");
    }
}


function submitFeedback() {
    const name = document.getElementById("feedbackName").value.trim();
    const email = document.getElementById("feedbackEmail").value.trim().toLowerCase();
    const message = document.getElementById("feedbackMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
        return;
    }

    let feedbackArray = JSON.parse(localStorage.getItem("feedbackData")) || [];
    feedbackArray.unshift({ name, email, message }); // Add new feedback at the top
    localStorage.setItem("feedbackData", JSON.stringify(feedbackArray));

    alert("Feedback submitted successfully!");

    
    closeFeedback(); 
    loadFeedback();
}


function loadFeedback() {
    let feedbackArray = JSON.parse(localStorage.getItem("feedbackData")) || [];
    let feedbackList = document.getElementById("feedbackList");
    feedbackList.innerHTML = "";

    if (feedbackArray.length === 0) {
        feedbackList.innerHTML = "<p>No feedback available yet.</p>";
        return;
    }

    feedbackArray.forEach(({ name, email, message }) => {
        let feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");
        feedbackItem.innerHTML = `
            <strong>${name}</strong> (${email}) <br>
            ${message}
        `;
        feedbackList.appendChild(feedbackItem);
    });
}


function closeFeedback() {
    document.getElementById("feedbackEmail").value = ""; 
    document.getElementById("feedbackName").value = ""; 
    document.getElementById("feedbackMessage").value = ""; 

    document.getElementById("feedbackEmailCheck").style.display = "block"; 
    document.getElementById("feedbackForm").style.display = "none"; 
}


document.addEventListener("DOMContentLoaded", loadFeedback);

function loginUser() {
    let username = document.getElementById("username").value.trim();
    
    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("username", username);

    
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    
    document.getElementById("username").value = "";
}


function checkLogin() {
    let username = localStorage.getItem("username");
    if (username) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("loginScreen").style.display = "flex";
        document.getElementById("mainContent").style.display = "none";
    }
}

function logoutUser() {
    localStorage.removeItem("username");

    
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("loginScreen").style.display = "flex";

    
    document.getElementById("username").value = "";
}
window.onload = function () {
    let username = localStorage.getItem("username");

    if (username) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("loginScreen").style.display = "flex";
        document.getElementById("mainContent").style.display = "none";
    }
};

