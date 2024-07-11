function video_block(categoryName_1, name_1, categoryName_2, name_2,  categoryName_3, name_3) {
    var htmlContent = `
<div style="display: flex; justify-content: space-between">
<div style="width: 30%">

        <h2 class="title is-4">${name_1}</h2>
        <div id="results-carousel" class="carousel results-carousel">
            <div class="item item-video1">
                <center>
                    <video poster="" id="video1_${categoryName_1}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_1}/360_panoramic.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    360° Panoramic Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video2">
                <center>
                    <video poster="" id="video2_${categoryName_1}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_1}/front_view.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    Third-person front-view Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video3">
                <center>
                    <video poster="" id="video3_${categoryName_1}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_1}/stereo.mp4"
                                type="video/mp4">
                    </video>
                </center>

                <h2 class="subtitle has-text-centered">
                    Egocentric Video Clip
                </h2>
            </div>
        </div>
    </div>
    <div style="width: 30%">

        <h2 class="title is-4">${name_2}</h2>
        <div id="results-carousel" class="carousel results-carousel">
            <div class="item item-video1">
                <center>
                    <video poster="" id="video1_${categoryName_2}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_2}/360_panoramic.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    360° Panoramic Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video2">
                <center>
                    <video poster="" id="video2_${categoryName_2}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_2}/front_view.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    Third-person front-view Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video3">
                <center>
                    <video poster="" id="video3_${categoryName_2}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_2}/stereo.mp4"
                                type="video/mp4">
                    </video>
                </center>

                <h2 class="subtitle has-text-centered">
                    Egocentric Video Clip
                </h2>
            </div>
        </div>
    </div>
    <div style="width: 30%">

        <h2 class="title is-4">${name_3}</h2>
        <div id="results-carousel" class="carousel results-carousel">
            <div class="item item-video1">
                <center>
                    <video poster="" id="video1_${categoryName_3}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_3}/360_panoramic.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    360° Panoramic Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video2">
                <center>
                    <video poster="" id="video2_${categoryName_3}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_3}/front_view.mp4"
                                type="video/mp4">
                    </video>
                </center>
                <h2 class="subtitle has-text-centered">
                    Third-person front-view Video Clip (temporally cropped to 10s)
                </h2>
            </div>
            <div class="item item-video3">
                <center>
                    <video poster="" id="video3_${categoryName_3}" controls height="100%">
                        <!-- Your video file here -->
                        <source src="static/videos/example/${categoryName_3}/stereo.mp4"
                                type="video/mp4">
                    </video>
                </center>

                <h2 class="subtitle has-text-centered">
                    Egocentric Video Clip
                </h2>
            </div>
        </div>
    </div>
    </div>
    `;
    return htmlContent;
}
