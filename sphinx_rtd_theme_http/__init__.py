"""Customisations to sphinx_rtd_theme for better viewing of HTTP domain information."""

def setup(app):
    app.add_stylesheet("css/theme_http.css")
    app.add_javascript("js/http_collapse.js")
