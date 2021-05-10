"""remove test

Revision ID: 0818e396ea54
Revises: 3c1df68ffaeb
Create Date: 2021-05-07 19:43:26.541167

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0818e396ea54'
down_revision = '3c1df68ffaeb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('albums', 'test')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('albums', sa.Column('test', sa.VARCHAR(length=100), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
