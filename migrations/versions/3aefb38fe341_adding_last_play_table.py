"""adding last play table

Revision ID: 3aefb38fe341
Revises: 0818e396ea54
Create Date: 2021-05-09 20:51:21.546879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3aefb38fe341'
down_revision = '0818e396ea54'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('lastPlays',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('albumId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['albumId'], ['albums.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_constraint('users_lastListen_fkey', 'users', type_='foreignkey')
    op.drop_column('users', 'lastListen')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('lastListen', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('users_lastListen_fkey', 'users', 'albums', ['lastListen'], ['id'])
    op.drop_table('lastPlays')
    # ### end Alembic commands ###