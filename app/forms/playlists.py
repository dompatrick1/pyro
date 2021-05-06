from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class NewPlaylistForm(FlaskForm):
    name = StringField('name', [DataRequired()])
    userId = IntegerField('userId', [DataRequired()])
    submit = SubmitField("Submit")
