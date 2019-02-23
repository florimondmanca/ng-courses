from bocadillo import App


def create_app():
    app = App(
        enable_cors=True,
        cors_config={"allow_origins": ["*"], "allow_methods": ["*"]},
    )

    _COURSES = [
        {
            "id": 1,
            "code": "adv-maths",
            "name": "Advanced Mathematics",
            "created": "2018-08-14T12:09:45",
        },
        {
            "id": 2,
            "code": "cs1",
            "name": "Computer Science I",
            "created": "2018-06-12T18:34:16",
        },
    ]

    @app.route("/courses")
    async def courses_list(req, res):
        res.media = _COURSES

    return app


if __name__ == "__main__":
    create_app().run()
