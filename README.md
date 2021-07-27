# Links #
* [Website](https://ceeoinnovations.github.io/hackathon-template/)
* [Data (Google Drive)](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing)

# How to build a Hackathon Website Using Google Sheets #
## Google Drive Setup ##
1. Create a folder with your hackathon name in this [CEEO Google Drive](https://drive.google.com/drive/folders/1Q93uWY06GB0Hlg8kT3HfqQGiKK60VgR_?usp=sharing). **Change sharing permission** of this folder so that `Anyone from CEEO can edit`
2. Make a copy of the three files below in this [folder](https://drive.google.com/drive/folders/1E49pAmqL3kGckYD4MxFROPWgxLSnGrCE?usp=sharing) and move them to your folder in Google Drive
* `about`: basic information required to build your website
* `Submission Form`: project submission form
3. Create a folder named Resources
* `Resources`: a folder where people can upload other files. **Change sharing permission** of this folder so that `Anyone can edit`
3. Open the form in Google Drive. Click `Responses` and click More icon on the right. Click `Select response destination`. Choose an option of `Create a new spreadsheet`. Name that spreadsheet as `projects`
* `Submit your project (File responses)`: a folder for images and videos will be restored. **Change sharing permission** of this folder so that `Anyone can view`
5. Replace all the placeholder text with your data in the `about`sheet
* `website`: you can get your website link once setting up GitHub
* `form`: open the form in Google Drive and click `Send` and then `Link` tab to find a form link
* `resources`: copy and paste a sharable link of the `Resources` folder
* `image`: in case having an image on your home page is helpful, upload an image to the `Resources` folder and copy and paste a sharable link

## GitHub Setup ##
1. Get invited as a member of [CEEO Innovations](https://github.com/ceeoinnovations) repository
2. Click `Use this template` on this repository to create a new repository 
3. Select `ceeoinnovations` as owner. Name the repository with your hackathon name. Make it `public`
* Use **lowercase** for repository name
* Repository name should be unique and it describes your hackathon (e.g., smart-motor-hackathon) 
4. Go to `index.js` and replace the existing csv file URLs (line #9, #10) with yours. 
* To get links to your Google Sheets, open the spreadsheets; click `File` and then `Publish to the web`. Select `Entire Document` and `csv` then click `Publish`. The first csv file URL is for about and the second one is for projects
5. Go to `index.html` and edit title (line #4). 
6. Go to `components/Navbar.js` and update the hyperlink with your GitHub repository name (line #7) 
7. To publish your website, go to `Settings`, click `Pages`, select `main` as a source, and save. You can find your website link there.
8. Update `readme.md` in your GitHub repository. Get rid of all the instructions except for the Links section on top. Replace all three links with yours

## Project Submission ##
* Share a website link with people and ask them to click `Submit Project` to submit their data
* If you want to hide a specific project, open the `projects` sheets and create a new tab named `hidden`. Move the project data to the `hidden` tab
* Go to your website to see updates. It may take a couple of minutes to get updated
